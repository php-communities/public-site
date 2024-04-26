import Image from 'next/image';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/_components/core/accordion/accordion';
import ChannelsCard, { ChannelsProps } from '@/(home)/_components/channels/card';
import { readContent } from '~/lib/utils/read-content';

export function Channels() {
    const items = readContent<ChannelsProps>('channels').sort(
        (a, b) => Number(new Date(b.data.title)) - Number(new Date(a.data.title))
    );

    const news = items.filter(card => card.data.category === 'news');
    const frameworks = items.filter(card => card.data.category === 'frameworks');
    const chats = items.filter(card => card.data.category === 'chats');
    const podcasts = items.filter(card => card.data.category === 'podcasts');
    const youtube = items.filter(card => card.data.category === 'youtube');
    const jobs = items.filter(card => card.data.category === 'jobs');

    return (
        <div className="w-full pb-[45px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/content/channels.png"
                        alt="Текстовые и видео каналы и чаты, чтобы оставаться в курсе"
                        width={410}
                        height={239}
                    />
                </div>

                <div className="mx-auto mb-[45px] max-w-[980px] text-center text-[30px] font-bold leading-[1.23] text-blue md:text-[40px] lg:mb-[90px] lg:text-[62px]">
                    Текстовые и видео каналы и чаты, чтобы оставаться в курсе
                </div>

                <Accordion collapsible type="single">
                    <AccordionItem value="news" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            Телеграм-каналы про PHP с новинками и интересными темами
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {news.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="frameworks" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            Телеграм-каналы и чаты по PHP-фреймворкам
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {frameworks.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="chats" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            PHP-чаты, где можно задавать вопросы, помогать советами и узнавать новое
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {chats.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="podcasts" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            Подкасты про PHP
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {podcasts.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="youtube" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            Интересные и полезные YouTube-каналы про PHP
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {youtube.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="jobs" className="border-y border-y-[#eee]">
                        <AccordionTrigger className="mb:text-[24px] group py-[27px] text-left text-[20px] font-bold leading-[1.35] hover:no-underline">
                            Про PHP-работу
                        </AccordionTrigger>

                        <AccordionContent className="pb-[40px]">
                            <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[40px]">
                                {jobs.map(card => (
                                    <ChannelsCard
                                        key={card.slug}
                                        imgSrc={card.data.imgSrc}
                                        title={card.data.title}
                                        link={card.data.link}
                                        text={card.content}
                                        category={card.data.category}
                                    />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
