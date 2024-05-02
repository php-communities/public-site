export type Event = {
    slug: string;
    date: string;
    title: string;
    text: string;
    link: string;
    tab: string;
    filters: string;
    city: string;
};

export enum EventTabType {
    Soon = 'soon',
    Passed = 'passed',
}

export type EventTab = {
    id: string;
    title: string;
    type: EventTabType | EventFilterType;
};

export enum EventFilterType {
    All = 'all',
    Translation = 'translation',
    Online = 'online',
    Offline = 'offline',
}
