import { CityItem } from '@/(home)/_components/places';
import { Event } from '~/lib/types/events';
import { Content } from '~/lib/utils/read-content';

export type EventGroup = {
    [year: number]: Content<Event>[];
};

export const dateFormat = (iso: string) =>
    new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' }).format(new Date(iso));

export const dateToRuFormat = (iso: string) =>
    new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' }).format(new Date(iso));

export const sortByAlphabet = (a: Content<CityItem>, b: Content<CityItem>) => {
    if (a.data.name.toLowerCase() < b.data.name.toLowerCase()) {
        return -1;
    }

    if (a.data.name.toLowerCase() > b.data.name.toLowerCase()) {
        return 1;
    }

    return 0;
};

export const sortByDate = (a: Content<Event>, b: Content<Event>) => {
    return Number(new Date(b.data.date)) - Number(new Date(a.data.date));
};

export const sortByDateDesc = (a: Content<Event>, b: Content<Event>) => {
    return Number(new Date(a.data.date)) - Number(new Date(b.data.date));
};

export const sortBySlug = <T>(a: Content<T>, b: Content<T>) => {
    return Number(a.slug) - Number(b.slug);
};

export const groupByYear = (array: Content<Event>[]) => {
    const grouped: EventGroup = {};

    array.forEach(object => {
        const year = new Date(object.data.date).getFullYear();

        if (!grouped[year]) {
            grouped[year] = [];
        }

        grouped[year]?.push(object);
    });

    return grouped;
};
