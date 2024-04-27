import { readContent } from '~/lib/utils/read-content';

import UsefulLinksCard, { UsefulLinksProps } from './card';

export function UsefulLinks() {
    const cards = readContent<UsefulLinksProps>('useful-links');

    return (
        <div className="w-full bg-gray-bg">
            <div className="container mx-auto py-16 lg:py-32">
                <div className="mb-12 text-center font-inter text-[25px] font-bold text-black md:mb-24 md:text-[32px] lg:text-[42px]">
                    Пара полезных ссылок про сообщество
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    {cards.map(card => (
                        <UsefulLinksCard
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
