import Image from 'next/image';
import Link from 'next/link';

export function Communities() {
    return (
        <div className="w-full ">
            <div className="relative bg-blue-bg">
                <div className="container mx-auto flex">
                    <div className="py-10 md:py-16 lg:w-2/3 lg:py-24">
                        <div className="mb-[45px] font-inter text-[25px] font-bold text-blue md:text-[32px] lg:mb-[90px] lg:text-[48px]">
                            PHP-сообщество в Минске
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8">
                            <div className="w-full md:w-1/2">
                                <Image
                                    className="mb-[20px]"
                                    src="/images/svg/chat-bubbles.svg"
                                    alt="Прошедшие мероприятия"
                                    width={15}
                                    height={15}
                                />
                                <div className="mb-[15px] font-inter text-[20px] font-bold text-black">
                                    Прошедшие мероприятия
                                </div>

                                <div className="mb-[20px] font-inter font-light">
                                    <div className="mb-[5px] font-inter font-bold">2023</div>
                                    <div>
                                        <span className="font-medium">10.08</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://wearecommunity.io/events/phpofby_master_timezones_and_how_to_interview"
                                        >
                                            PHP of BY Meetup #41
                                        </Link>{' '}
                                        ▶ про часовые пояса и технические интервью.
                                    </div>
                                    <div>
                                        <span className="font-medium">07.03</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://wearecommunity.io/events/phpofby-meetup-40"
                                        >
                                            PHP of BY Meetup #40
                                        </Link>{' '}
                                        ▶ про MicroPHP Framework и кое-что больше, чем Memcache.
                                    </div>
                                </div>

                                <div className="mb-[20px] font-inter font-light">
                                    <div className="mb-[5px] font-inter font-bold">2022</div>
                                    <div>
                                        <span className="font-medium">15.12</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://wearecommunity.io/events/php-of-by-meetup-39"
                                        >
                                            PHP of BY Meetup #39
                                        </Link>{' '}
                                        ▶ про интеграцию PHP-проекта с 1С, Docker и практический
                                        пример использования диапазонного типа данных PostgreSQL.
                                    </div>
                                </div>

                                <div className="mb-[20px] font-inter font-light">
                                    <div className="mb-[5px] font-inter font-bold">2021</div>
                                    <div>
                                        <span className="font-medium">2 декабря</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/o8qn5g_SGRs"
                                        >
                                            Spiral Ecosystem news #1
                                        </Link>{' '}
                                        : последние новости по Roadrunner, Cycle ORM и Spiral
                                        Framework.
                                    </div>
                                    <div>
                                        <span className="font-medium">21 октября</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/uYPvYyYK4jQ"
                                        >
                                            PHP of BY Meetup # 38
                                        </Link>{' '}
                                        Roadrunner - что дальше?
                                    </div>
                                    <div>
                                        <span className="font-medium">29 июля</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/cUBpUDy_7ZE"
                                        >
                                            PHP of BY Meetup #37
                                        </Link>{' '}
                                        : Cloud сертификации & Kong - API Gateway7.
                                    </div>
                                    <div>
                                        <span className="font-medium">20 мая</span> —{' '}
                                        <span className="font-medium">PHP of BY Meetup #36: </span>
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/uYPvYyYK4jQ"
                                        >
                                            AppSec Manifesto
                                        </Link>{' '}
                                        и{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/UdHB-PCf8K4"
                                        >
                                            Wordpress
                                        </Link>
                                        .
                                    </div>
                                    <div>
                                        <span className="font-medium">15 апреля</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/upL8o-OXYEc"
                                        >
                                            PHP of BY #35. Оркестрация и закон Мерфи
                                        </Link>
                                        : обрабатываем ошибки-бизнес процессов
                                    </div>
                                    <div>
                                        <span className="font-medium">25 февраля</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://youtu.be/0NCMEaFMj_M"
                                        >
                                            Воркшоп: Оркестрируй это!
                                        </Link>{' '}
                                        Описываем сложные бизнес процессы на PHP.
                                    </div>
                                </div>
                                <div className="mb-[20px] font-inter font-light">
                                    <div className="mb-[5px] font-inter font-bold">2020</div>
                                    <div>
                                        <span className="font-medium">25 апреля</span> —{' '}
                                        <Link
                                            className="font-medium text-link underline"
                                            href="https://www.youtube.com/watch?v=BZlbW99ghYk"
                                        >
                                            PHP-meetup #33
                                        </Link>
                                        : про код-ревью, PHP для игр, рефакторинг, Drupal и как
                                        переписать проект.
                                    </div>
                                    <div>
                                        <span className="font-medium">
                                            6 февраля — PHP-meetup #32,
                                        </span>{' '}
                                        запись не велась.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Image
                                    className="mb-[20px]"
                                    src="/images/svg/send-button.svg"
                                    alt="PHP-чаты и каналы"
                                    width={15}
                                    height={15}
                                />
                                <div className="mb-[15px] font-inter text-[20px] font-bold text-black">
                                    PHP-чаты и каналы
                                </div>
                                <div className="font-inter font-light">
                                    <Link
                                        className="font-bold text-link underline"
                                        href="https://t.me/phpofby"
                                    >
                                        @phpofby
                                    </Link>{' '}
                                    — чат сообщества Беларуси.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-bg lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[30%]">
                    <Image
                        className="size-full object-cover"
                        src="/images/content/city1.webp"
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="container py-[20px] text-center font-inter text-[30px] font-medium md:py-[30px] md:text-[40px] lg:py-[40px]">
                ~
            </div>
        </div>
    );
}
