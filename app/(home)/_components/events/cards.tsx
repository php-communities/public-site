import React from 'react';

import EventCard from '@/(home)/_components/events/card';
import { Event } from '~/lib/types/events';

type EventCardsProps = {
    cards: Event[];
};

function EventCards({ cards }: EventCardsProps) {
    return (
        <>
            {cards.length > 0 && (
                <div className="grid grid-cols-3 gap-x-10 gap-y-20">
                    {cards.map(({ id, date, title, text, link, tab, filters }: Event) => (
                        <EventCard
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                            text={text}
                            link={link}
                            tab={tab}
                            filters={filters}
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
