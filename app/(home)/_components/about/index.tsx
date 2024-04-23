import Image from 'next/image';
import Link from 'next/link';

export function About() {
    return (
        <div className="w-full bg-gray-bg">
            <div className="container mx-auto py-32">
                <div className="mb-24 text-center font-inter text-[42px] font-bold text-black">
                    Пара полезных ссылок про сообщество
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <Link
                        className="group flex flex-col bg-white"
                        href="https://phpcommunity.ru/2023-php"
                    >
                        <div className="h-[300px] bg-blue-bg">
                            <Image
                                className="size-full object-cover"
                                src="/images/content/about-image.png"
                                width="560"
                                height="300"
                                alt="Итоги 2023 года в сообществе"
                            />
                        </div>
                        <div className="flex h-full flex-col items-start justify-between p-8">
                            <div className="mb-8">
                                <div className="mb-2 font-inter text-2xl font-bold text-black">
                                    Итоги 2023 года в сообществе
                                </div>
                                <div className="font-inter text-xl font-light text-black">
                                    Лендинг с результатами.
                                </div>
                            </div>
                            <button
                                type="button"
                                className="block h-[45px] rounded bg-black px-8 font-inter text-sm font-bold leading-[45px] text-white transition group-hover:bg-blue-dark"
                            >
                                Подробнее
                            </button>
                        </div>
                    </Link>

                    <Link
                        className="group flex flex-col bg-white"
                        href="https://habr.com/ru/companies/skyeng/articles/666626/"
                    >
                        <div className="h-[300px] bg-blue-bg">
                            <Image
                                className="size-full object-cover"
                                src="/images/content/about-image2.jpeg"
                                width="560"
                                height="300"
                                alt="Как прокачаться в PHP: 70 ресурсов из опроса русскоязычного
                                    сообщества"
                            />
                        </div>
                        <div className="flex h-full flex-col items-start justify-between p-8">
                            <div className="mb-8">
                                <div className="mb-2 font-inter text-2xl font-bold text-black">
                                    Как прокачаться в PHP: 70 ресурсов из опроса русскоязычного
                                    сообщества
                                </div>
                                <div className="font-inter text-xl font-light text-black">
                                    Статья с подборкой книг, курсов, каналов и не только.
                                </div>
                            </div>
                            <button
                                type="button"
                                className="block h-[45px] rounded bg-black px-8 font-inter text-sm font-bold leading-[45px] text-white transition group-hover:bg-blue-dark"
                            >
                                Подробнее
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
