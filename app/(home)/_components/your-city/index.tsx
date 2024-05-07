import Image from 'next/image';
import Link from 'next/link';

export function YourCity() {
    return (
        <div className="mb-[45px] w-full md:mb-[90px] lg:mb-[180px] lg:scroll-mt-[68px]" id="start">
            <div className="container mx-auto flex flex-col lg:flex-row">
                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <Image
                        src="/images/content/your-city.png"
                        alt="Запустить PHP-сообщество в своем городе"
                        width={560}
                        height={449}
                    />
                </div>
                <div className="w-full bg-blue p-[20px] md:p-[40px] lg:w-1/2 lg:p-[60px]">
                    <div className="text-[30px] font-bold leading-[1.23] text-white md:text-[35px] lg:text-[42px]">
                        Запустить PHP-сообщество в своем городе
                    </div>
                    <div className="my-[24px] h-[3px] w-[50px] bg-white opacity-60" />
                    <div className="text-[15px] font-light leading-[1.55] text-white md:text-[20px]">
                        В этой статье на Хабре{' '}
                        <Link
                            className="text-link underline underline-offset-4 transition hover:opacity-70"
                            href="https://habr.com/ru/company/skyeng/blog/480484/"
                            target="_blank"
                        >
                            BeerPHP: что это, зачем идти и как запустить у себя в городе
                        </Link>{' '}
                        есть информация про форматы в разных городах, примеры и ссылка на
                        инструкцию.
                    </div>
                </div>
            </div>
        </div>
    );
}
