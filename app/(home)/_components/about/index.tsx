import { readContent } from '~/lib/utils/read-content';

import AboutCard, { AboutCardProps } from './card';

export function About() {
    const cards = readContent<AboutCardProps>('useful-links');

    return (
        <div className="w-full bg-gray-bg">
            <div className="container mx-auto py-32">
                <div className="mb-24 text-center font-inter text-[42px] font-bold text-black">
                    Пара полезных ссылок про сообщество
                </div>

                <div className="grid grid-cols-2 gap-10">
                    {cards.map(card => (
                        <AboutCard
                            key={card.slug}
                            title={card.data.title}
                            link={card.data.link}
                            imgSrc={card.data.imgSrc}
                            text={card.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
