import Link from 'next/link';
import React from 'react';

import { CountryProps } from '@/(home)/_components/places/index';

function EventCard({ name, cities }: CountryProps) {
    return (
        <div className="flex flex-col gap-x-5 md:flex-row">
            <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                {name}
            </div>

            <div className="grid w-full grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {cities.map(city => (
                    <Link
                        key={city.slug}
                        className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                        href={`#${city.slug}`}
                    >
                        {city.data.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default EventCard;
