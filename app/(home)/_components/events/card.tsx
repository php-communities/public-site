import Link from 'next/link';
import React from 'react';

import { EventFilters } from '@/(home)/_components/events/mocks';
import { Event } from '~/lib/types/events';

function EventCard({ id, date, title, text, link, filters }: Event) {
    return (
        <Link key={id} href={link} className="bg-blue-bg p-5 shadow transition hover:shadow-lg">
            <div className="mb-2.5 font-inter text-[13px] font-bold text-blue-light">{date}</div>
            <div className="mb-2 font-inter text-2xl font-bold text-blue-dark">{title}</div>
            <div className="mb-3.5 font-inter text-sm font-light">{text}</div>
            <div className="flex space-x-4">
                {filters.map((filter: string, index) => (
                    <div
                        key={index}
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
