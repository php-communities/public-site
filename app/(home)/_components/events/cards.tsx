import React from 'react';

import EventCard from '@/(home)/_components/events/card';
import { Event } from '~/lib/types/events';
import { Content } from '~/lib/utils/read-content';

type EventCardsProps = {
    cards: Content<Event>[];
};

function EventCards({ cards }: EventCardsProps) {
    return (
        <>
            {cards.length > 0 && (
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
                    {cards.map(({ slug, content, data }: Content<Event>) => (
                        <EventCard
                            key={slug}
                            slug={slug}
                            date={data.date}
                            title={data.title}
                            text={content}
                            link={data.link}
                            tab={data.tab}
                            filters={data.filters}
                        />
                    ))}
                </div>
            )}

            {cards.length === 0 && (
                <div className="flex min-h-[378px] w-full items-center justify-center border border-gray">
                    <div className="font-inter font-light text-gray">Ничего не найдено</div>
                </div>
            )}
        </>
    );
}

export default EventCards;
