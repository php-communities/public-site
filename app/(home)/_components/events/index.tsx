import { clsx } from 'clsx';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/core/tabs/tabs';
import EventCards from '@/(home)/_components/events/cards';
import { EventFilters, EventTabs } from '@/(home)/_components/events/mocks';
import { CityItem } from '@/(home)/_components/places';
import { Event } from '~/lib/types/events';
import { sortByAlphabet, sortByDate, sortByDateDesc } from '~/lib/utils/helpers';
import { Content, readContent } from '~/lib/utils/read-content';

export function Events() {
    const belarus = readContent<CityItem>(`communities/belarus`).sort(sortByAlphabet);
    const russia = readContent<CityItem>(`communities/russia`).sort(sortByAlphabet);
    const ukraine = readContent<CityItem>(`communities/ukraine`).sort(sortByAlphabet);

    const cities = [...belarus, ...russia, ...ukraine];

    let all: Content<Event>[] = [];

    cities.forEach(city => {
        const belarus = readContent<Event>(`events/belarus/${city.slug}`).sort(sortByDate);
        const russia = readContent<Event>(`events/russia/${city.slug}`).sort(sortByDate);
        const ukraine = readContent<Event>(`events/ukraine/${city.slug}`).sort(sortByDate);

        const events = [...belarus, ...russia, ...ukraine];

        all = [...all, ...events];
    });

    const soon = all.filter(item => new Date(item.data.date) > new Date()).sort(sortByDateDesc);
    const passed = all.filter(item => new Date(item.data.date) <= new Date()).sort(sortByDate);

    const cards = {
        soon: soon,
        passed: {
            all: passed,
            translation: passed.filter(card => card.data.filters.includes('translation')),
            online: passed.filter(card => card.data.filters.includes('online')),
            offline: passed.filter(card => card.data.filters.includes('offline')),
        },
    };

    return (
        <div className="w-full">
            <div className="container mx-auto pb-8 pt-11 md:pb-16 lg:pb-32">
                <div className="mb-16 text-center font-inter text-[25px] font-bold text-blue md:text-[32px] lg:text-[42px]">
                    Ближайшие онлайны и офлайны
                </div>

                <Tabs defaultValue="soon">
                    <TabsList className="mb-8 flex justify-center bg-transparent">
                        {EventTabs.map((item, index) => (
                            <TabsTrigger
                                key={item.id}
                                value={item.type}
                                className={clsx(
                                    'w-[280px]  border border-blue-dark p-3.5 font-inter text-sm font-bold text-blue-dark transition hover:bg-blue-dark hover:text-white data-[state=active]:bg-blue-dark data-[state=active]:text-white',
                                    index === 0
                                        ? 'rounded-l-[30px] rounded-r-none'
                                        : 'rounded-l-none rounded-r-[30px]'
                                )}
                            >
                                {item.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value="soon">
                        <EventCards cards={cards?.soon} />
                    </TabsContent>

                    <TabsContent value="passed">
                        <Tabs defaultValue="all">
                            <TabsList className="mb-8 flex h-auto flex-col justify-center space-y-2.5 bg-transparent md:flex-row md:space-x-2.5 md:space-y-0 lg:mb-16">
                                {EventFilters.map(item => (
                                    <TabsTrigger
                                        key={item.id}
                                        value={item.type}
                                        className="rounded-[40px] border border-blue-light px-4 py-1.5 font-inter text-sm font-bold text-blue-light transition hover:bg-blue-light hover:text-white data-[state=active]:bg-blue-light data-[state=active]:text-white"
                                    >
                                        {item.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            <TabsContent value="all">
                                <EventCards cards={cards?.passed?.all} />
                            </TabsContent>
                            <TabsContent value="translation">
                                <EventCards cards={cards?.passed?.translation} />
                            </TabsContent>
                            <TabsContent value="online">
                                <EventCards cards={cards?.passed?.online} />
                            </TabsContent>
                            <TabsContent value="offline">
                                <EventCards cards={cards?.passed?.offline} />
                            </TabsContent>
                        </Tabs>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
