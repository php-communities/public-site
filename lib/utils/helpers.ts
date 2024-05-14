import { Content } from '~/lib/utils/read-content';

export type YearGroup<T> = {
    [year: number]: Content<T>[];
};

export const dateFormat = (iso: string) =>
    new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short' }).format(new Date(iso));

export const dateToRuFormat = (iso: string) =>
    new Intl.DateTimeFormat('ru-RU', { dateStyle: 'long' }).format(new Date(iso));

export const sortByName = <T extends { name: string }>(a: Content<T>, b: Content<T>) => {
    if (a.data.name.toLowerCase() < b.data.name.toLowerCase()) {
        return -1;
    }

    if (a.data.name.toLowerCase() > b.data.name.toLowerCase()) {
        return 1;
    }

    return 0;
};

export const sortByDate = <T extends { date: string }>(a: Content<T>, b: Content<T>) => {
    return Number(new Date(b.data.date)) - Number(new Date(a.data.date));
};

export const sortByDateDesc = <T extends { date: string }>(a: Content<T>, b: Content<T>) => {
    return Number(new Date(a.data.date)) - Number(new Date(b.data.date));
};

export const sortBySlug = <T>(a: Content<T>, b: Content<T>) => {
    return Number(a.slug) - Number(b.slug);
};

export const groupByYear = <T extends { date: string }>(array: Content<T>[]) => {
    const grouped: YearGroup<T> = {};

    array.forEach(object => {
        const year = new Date(object.data.date).getFullYear();

        if (!grouped[year]) {
            grouped[year] = [];
        }

        grouped[year]?.push(object);
    });

    return grouped;
};
