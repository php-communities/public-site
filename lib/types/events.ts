export type Event = {
    id: string;
    date: string;
    title: string;
    text: string;
    link: string;
    tab: EventTabType;
    filters: EventFilterType[];
};

export enum EventTabType {
    Soon = 'soon',
    Passed = 'passed',
}

export type EventTab = {
    id: string;
    title: string;
    type: EventTabType;
};

export enum EventFilterType {
    All = 'all',
    Translation = 'translation',
    Online = 'online',
    Offline = 'offline',
}

export type EventFilter = {
    id: string;
    title: string;
    type: EventFilterType;
};
