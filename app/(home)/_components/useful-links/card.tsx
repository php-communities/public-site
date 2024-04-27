import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type UsefulLinksProps = {
    title: string;
    text: string;
    imgSrc: string;
    link: string;
};

function UsefulLinksCard({ title, link, text, imgSrc }: UsefulLinksProps) {
    return (
        <Link className="group flex flex-col bg-white" href={link}>
            <div className="h-[200px] bg-blue-bg md:h-[300px]">
                <Image
                    className="size-full object-cover"
                    src={imgSrc}
                    width="560"
                    height="300"
                    alt={title}
                />
            </div>
            <div className="flex h-full flex-col items-start justify-between p-4 md:p-8">
                <div className="mb-8">
                    <div className="mb:text-2xl mb-2 font-inter text-xl font-bold text-black">
                        {title}
                    </div>
                    <div className="mb:text-xl font-inter text-lg font-light text-black">
                        {text}
                    </div>
                </div>
                <button
                    type="button"
                    className="block h-[45px] rounded bg-black px-8 font-inter text-sm font-bold leading-[45px] text-white transition group-hover:bg-blue-dark"
                >
                    Подробнее
                </button>
            </div>
        </Link>
    );
}

export default UsefulLinksCard;
