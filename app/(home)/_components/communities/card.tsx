import Image from 'next/image';
import React from 'react';
import MarkdownView from 'react-showdown';

import EventItem from '@/(home)/_components/events/item';
import { CityItem } from '@/(home)/_components/places';
import { Event } from '~/lib/types/events';
import { groupByYear, sortByDate } from '~/lib/utils/helpers';
import { Content, readContent } from '~/lib/utils/read-content';

function CommunityCard(city: Content<CityItem>) {
    const events = readContent<Event>(`events/*/${city.slug}/*`).sort(sortByDate);
    const items = groupByYear(events);

    return (
        <>
            <div key={city.slug} className="relative scroll-mt-[68px] bg-blue-bg" id={city.slug}>
                <div className="container mx-auto flex">
                    <div className="py-10 md:py-16 lg:w-2/3 lg:py-24">
                        <div className="mb-[45px] font-inter text-[25px] font-bold text-blue md:text-[32px] lg:mb-[90px] lg:text-[48px]">
                            {city.data.title}
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            <div className="mb-[32px] w-full space-y-5 md:mb-0 md:w-1/2">
                                <Image
                                    className="mb-[20px]"
                                    src="/images/svg/chat-bubbles.svg"
                                    alt="Прошедшие мероприятия"
                                    width={15}
                                    height={15}
                                />
                                <div className="mb-[15px] font-inter text-[20px] font-bold text-black">
                                    Прошедшие мероприятия
                                </div>

                                {Object.keys(items).length > 0 &&
                                    Object.keys(items)
                                        .sort((a, b) => Number(b) - Number(a))
                                        .map(year => (
                                            <div key={year}>
                                                <div className="mb-0.5 font-bold">{year}</div>

                                                {items[Number(year)]?.map(
                                                    (event: Content<Event>) => (
                                                        <EventItem
                                                            key={event.slug}
                                                            date={event.data.date}
                                                            title={event.data.title}
                                                            text={event.content}
                                                            link={event.data.link}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ))}

                                {Object.keys(items).length === 0 && (
                                    <div className="font-light">Все впереди :)</div>
                                )}
                            </div>

                            <div className="w-full md:w-1/2">
                                <Image
                                    className="mb-[20px]"
                                    src="/images/svg/send-button.svg"
                                    alt="PHP-чаты и каналы"
                                    width={15}
                                    height={15}
                                />
                                <div className="mb-[15px] font-inter text-[20px] font-bold text-black">
                                    PHP-чаты и каналы
                                </div>

                                <MarkdownView
                                    markdown={city.content ?? ''}
                                    className="md-content"
                                    options={{
                                        tables: true,
                                        emoji: true,
                                        openLinksInNewWindow: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[300px] bg-gray-bg md:h-[400px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[30%]">
                    <Image
                        className="size-full object-cover"
                        src={city.data.imgSrc ?? ''}
                        alt={city.data.title ?? ''}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="container py-[20px] text-center font-inter text-[30px] font-medium md:py-[30px] md:text-[40px] lg:py-[40px]">
                ~
            </div>
        </>
    );
}

export default CommunityCard;
