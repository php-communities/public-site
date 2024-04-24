import { clsx } from 'clsx';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/core/tabs/tabs';
import EventCards from '@/(home)/_components/events/cards';
import { EventFilters, Events as EventItems, EventTabs } from '@/(home)/_components/events/mocks';

export function Events() {
    const soon = EventItems.filter(card => (card.tab as string) === 'soon');
    const passed = EventItems.filter(card => (card.tab as string) === 'passed');

    const cards = {
        soon: {
            all: soon,
            translation: soon.filter(card => card.filters.includes('translation')),
            online: soon.filter(card => card.filters.includes('online')),
            offline: soon.filter(card => card.filters.includes('offline')),
        },
        passed: {
            all: passed,
            translation: passed.filter(card => card.filters.includes('translation')),
            online: passed.filter(card => card.filters.includes('online')),
            offline: passed.filter(card => card.filters.includes('offline')),
        },
    };

    return (
        <div className="w-full">
            <div className="container mx-auto pb-32 pt-11">
                <div className="mb-16 text-center font-inter text-[42px] font-bold text-blue">
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
                        <Tabs defaultValue="all">
                            <TabsList className="mb-16 flex justify-center space-x-2.5 bg-transparent">
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
                                <EventCards cards={cards?.soon?.all} />
                            </TabsContent>
                            <TabsContent value="translation">
                                <EventCards cards={cards?.soon?.translation} />
                            </TabsContent>
                            <TabsContent value="online">
                                <EventCards cards={cards?.soon?.online} />
                            </TabsContent>
                            <TabsContent value="offline">
                                <EventCards cards={cards?.soon?.offline} />
                            </TabsContent>
                        </Tabs>
                    </TabsContent>

                    <TabsContent value="passed">
                        <Tabs defaultValue="all">
                            <TabsList className="mb-16 flex justify-center space-x-2.5 bg-transparent">
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
