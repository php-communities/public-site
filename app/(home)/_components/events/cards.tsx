'use client';

import React, { useState } from 'react';

import EventCard from '@/(home)/_components/events/card';
import { Event } from '~/lib/types/events';
import { Content } from '~/lib/utils/read-content';

type EventCardsProps = {
    cards: Content<Event>[];
    count?: number;
};

function EventCards({ cards, count = 12 }: EventCardsProps) {
    const [items, setItems] = useState(cards.slice(0, count));

    return (
        <>
            {cards.length > 0 && (
                <>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {items.map(({ slug, content, data }: Content<Event>) => (
                            <EventCard
                                key={slug}
                                slug={slug}
                                date={data.date}
                                title={data.title}
                                text={content}
                                link={data.link}
                                tab={data.tab}
                                filters={data.filters}
                                city={data.city}
                            />
                        ))}
                    </div>

                    {items.length < count ||
                        (items.length < cards.length && (
                            <button
                                type="button"
                                className="mx-auto mt-16 block h-[45px] rounded border border-blue-dark bg-white px-8 font-inter text-sm font-bold leading-[45px] text-blue-dark transition hover:bg-blue-dark hover:text-white"
                                onClick={() => setItems(cards)}
                            >
                                Еще...
                            </button>
                        ))}
                </>
            )}

            {cards.length === 0 && (
                <div className="flex min-h-[378px] w-full items-center justify-center rounded border border-gray">
                    <div className="font-inter font-light text-gray">Ничего не найдено</div>
                </div>
            )}
        </>
    );
}

export default EventCards;
