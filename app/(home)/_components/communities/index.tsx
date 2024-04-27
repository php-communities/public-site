import Image from 'next/image';
import MarkdownView from 'react-showdown';

import { readContent } from '~/lib/utils/read-content';

type ChatItem = string;

type EventItem = {
    title: string;
    imgSrc: string;
};

const places = [
    'mns',
    'dgs',
    'vrn',
    'ekb',
    'ivn',
    'irk',
    'izh',
    'yola',
    'kzn',
    'kld',
    'krd',
    'krk',
    'lip',
    'msk',
    'nn',
    'nsk',
    'rnd',
    'smr',
    'spb',
    'srt',
    'tyum',
    'tms',
    'ulk',
    'ufa',
    'yrs',
    'hrk',
];

export function Communities() {
    return (
        <div className="w-full scroll-mt-[68px]">
            {places.map(place => {
                const chats = readContent<ChatItem>(`communities/${place}/chats`)?.[0];
                const events = readContent<EventItem>(`communities/${place}/events`)?.[0];
                return (
                    <>
                        <div key={place} className="relative bg-blue-bg" id={place}>
                            <div className="container mx-auto flex">
                                <div className="py-10 md:py-16 lg:w-2/3 lg:py-24">
                                    <div className="mb-[45px] font-inter text-[25px] font-bold text-blue md:text-[32px] lg:mb-[90px] lg:text-[48px]">
                                        {events?.data.title}
                                    </div>
                                    <div className="flex flex-col md:flex-row md:space-x-8">
                                        <div className="w-full md:w-1/2">
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

                                            <MarkdownView
                                                markdown={events?.content ?? ''}
                                                options={{ tables: true, emoji: true }}
                                                className="md-content"
                                            />
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
                                                markdown={chats?.content ?? ''}
                                                options={{ tables: true, emoji: true }}
                                                className="md-content"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-bg lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[30%]">
                                <Image
                                    className="size-full object-cover"
                                    src={events?.data.imgSrc ?? ''}
                                    alt={events?.data.title ?? ''}
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
            })}
        </div>
    );
}
