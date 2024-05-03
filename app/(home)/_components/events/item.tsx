import Link from 'next/link';
import React from 'react';

import { dateFormat } from '~/lib/utils/helpers';

type EventItemProps = {
    date: string;
    title: string;
    text: string;
    link: string;
};

function EventItem({ date, title, text, link }: EventItemProps) {
    return (
        <div className="mb-1.5 font-light">
            <span className="font-medium">{dateFormat(date)}</span> —{' '}
            {link ? (
                <Link
                    href={link}
                    className="font-bold text-link underline transition hover:opacity-70"
                >
                    {title}
                </Link>
            ) : (
                <span className="font-bold">{title}</span>
            )}
            {/* eslint-disable-next-line xss/no-mixed-html */}
            .<span dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

export default EventItem;
