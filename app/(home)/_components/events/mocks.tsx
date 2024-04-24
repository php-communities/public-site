import { nanoid } from 'nanoid';

import { Event, EventFilter, EventFilterType, EventTab, EventTabType } from '~/lib/types/events';

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

export const EventFilters: EventFilter[] = [
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

export const Events: Event[] = [
    {
        id: nanoid(),
        date: 'Февраль 15, 2024',
        title: 'Live PHP SPb Meetup #2',
        text:
            'Два доклада: про полиморфизм в современном PHP и переносимое окружение для разработки и тестов.\n' +
            '(Регистрация на офлайн закрыта).',
        link: 'https://t.me/live_php_news/13',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Offline, EventFilterType.Translation],
    },
    {
        id: nanoid(),
        date: 'Декабрь 23, 2023',
        title: 'PHP community meetup',
        text: '4 доклада: про Composer, PHP 8.3, ускорение PHP и чем грозит незнание языка. Подведем итоги гота, запустим ежегодный опрос и сыграем в квиз.',
        link: 'https://phpcommunity.ru/meetup',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online],
    },
    {
        id: nanoid(),
        date: 'Декабрь 19, 2023',
        title: 'PHPofBY Meetup #42',
        text: 'Готовим Laravel в стиле Spatie, учимся использовать PACT для контрактного тестирования и разбираемся, почему мы не знаем PHP.',
        link: 'https://www.youtube.com/watch?v=lt2jbzTbPxM',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online],
    },
    {
        id: nanoid(),
        date: 'Декабрь 13, 2023',
        title: 'Lipetsk PHP Meetup #3',
        text: 'Три доклада: о ИИ в разработке, борьбе с ботами и подходе к разработке монолитных приложений.',
        link: 'https://t.me/php_community_lipetsk/569',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online, EventFilterType.Offline],
    },
    {
        id: nanoid(),
        date: 'Ноябрь 23, 2023',
        title: 'Митап питерского сообщества Live PHP',
        text: '4 доклада про рефакторинг крупного монолита без архитектуры, ИИ, SOLID при разработке на PHP и создание и mapping сущностей, Enums, ValueObjects.',
        link: 'https://t.me/live_php_news/10',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Offline, EventFilterType.Translation],
    },
    {
        id: nanoid(),
        date: 'Ноябрь 18, 2023',
        title: 'Шестой митап PHP-чата Ростова-на-Дону',
        text: 'Три доклада про кэш через OPcache, инструменты профилирования и «Transactional Outbox».',
        link: 'https://t.me/c/1408468984/6533',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Offline, EventFilterType.Translation],
    },
    {
        id: nanoid(),
        date: 'Октябрь 18, 2023',
        title: 'Lipetsk PHP Meetup #2',
        text: 'Два доклада — про архитектуру RetailCRM и доработку чужих библиотек под себя.',
        link: 'https://php-community-lipetsk.timepad.ru/event/2612206/',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Translation],
    },
    {
        id: nanoid(),
        date: 'Октябрь 16, 2023',
        title: 'Онлайн-конференция PHP Podlodka Crew',
        text: 'Недельная конференция с докладами, воркшопами и круглыми столами. Тема недели — пишем тесты.',
        link: `https://podlodka.io/phpcrew`,
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online],
    },
    {
        id: nanoid(),
        date: 'Март 10, 2023',
        title: 'BeerPHP SPB #6',
        text: 'Garbage Collector в PHP и утечки памяти, подходы к развитию навыков программирования, разработка через тестирование в PHP и еще 2 доклада.',
        link: 'https://t.me/beerphp_spb/88529',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Offline, EventFilterType.Translation],
    },
    {
        id: nanoid(),
        date: 'Март 03, 2023',
        title: 'Онлайн-конференция Podlodka PHP Crew #2',
        text: 'Тема сезона— Инструменты разработки. 5 дней докладов, воркшопов и дискуссий.',
        link: `https://podlodka.io/phpcrew`,
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online],
    },
    {
        id: nanoid(),
        date: 'Ноябрь 24, 2022',
        title: 'PHP Russia 2022',
        text: 'Крупнейшая конференция по PHP в России 24 и 25 ноября в офлайне в Москве + трансляция.',
        link: 'https://phprussia.ru/moscow/2022',
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online, EventFilterType.Offline],
    },
    {
        id: nanoid(),
        date: 'Ноябрь 04, 2022',
        title: 'Онлайн-конференция Podlodka PHP Crew',
        text: '5 дней докладов, воркшопов и дискуссий про Архитектуру — с 31 октября по 4 ноября.',
        link: `https://podlodka.io/phpcrew`,
        tab: EventTabType.Passed,
        filters: [EventFilterType.Online],
    },
    {
        id: nanoid(),
        date: 'Ноябрь 04, 2024',
        title: 'Онлайн-конференция Podlodka PHP Crew',
        text: '5 дней докладов, воркшопов и дискуссий про Архитектуру — с 31 октября по 4 ноября.',
        link: `https://podlodka.io/phpcrew`,
        tab: EventTabType.Soon,
        filters: [EventFilterType.Online],
    },
];
