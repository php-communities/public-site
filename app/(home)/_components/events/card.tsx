import Link from 'next/link';
import React from 'react';

import { EventFilters } from '@/(home)/_components/events/mocks';
import { Event } from '~/lib/types/events';

const dateToRuFormat = (iso: string) =>
    new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' }).format(new Date(iso));

function EventCard({ slug, date, title, text, link, filters }: Event) {
    return (
        <Link key={slug} href={link} className="bg-blue-bg p-5 shadow transition hover:shadow-lg">
            <div className="mb-2.5 font-inter text-[13px] font-bold text-blue-light">
                {dateToRuFormat(date)}
            </div>
            <div className="mb-2 font-inter text-2xl font-bold text-blue-dark">{title}</div>
            <div className="mb-3.5 font-inter text-sm font-light">{text}</div>
            <div className="flex space-x-4">
                {filters.split(',').map((filter: string) => (
                    <div
                        key={filter}
                        className="font-inter text-[13px] font-bold uppercase text-blue-light"
                    >
                        {EventFilters.find(item => (item.type as string) === filter)?.title}
                    </div>
                ))}
            </div>
        </Link>
    );
}

export default EventCard;
