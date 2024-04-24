import { nanoid } from 'nanoid';

import { EventFilterType, EventTab, EventTabType } from '~/lib/types/events';

export const EventTabs: EventTab[] = [
    {
        id: nanoid(),
        title: 'Скоро будут',
        type: EventTabType.Soon,
    },
    {
        id: nanoid(),
        title: 'Уже прошли',
        type: EventTabType.Passed,
    },
];

export const EventFilters: EventTab[] = [
    {
        id: nanoid(),
        title: 'Все',
        type: EventFilterType.All,
    },
    {
        id: nanoid(),
        title: 'Есть трансляция',
        type: EventFilterType.Translation,
    },
    {
        id: nanoid(),
        title: 'Онлайн',
        type: EventFilterType.Online,
    },
    {
        id: nanoid(),
        title: 'Офлайн',
        type: EventFilterType.Offline,
    },
];
