import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type ChannelsProps = {
    imgSrc: string;
    title: string;
    text: string;
    link: string;
    category: string;
};

function ChannelsCard({ imgSrc, title, text, link }: ChannelsProps) {
    return (
        <Link href={link} target="_blank" className="group">
            <div className="mb-[20px]">
                <Image className="object-cover" src={imgSrc} alt={title} width={266} height={266} />
            </div>
            <div className="mb-[12px] block text-[18px] font-bold leading-[1.35] text-blue-dark underline underline-offset-4 transition group-hover:text-blue-light">
                {title}
            </div>
            <div className="font-light leading-[1.55] text-[#141414]">{text}</div>
        </Link>
    );
}

export default ChannelsCard;
