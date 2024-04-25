import Image from 'next/image';
import Link from 'next/link';

export function YourCity() {
    return (
        <div className="mb-[180px] w-full">
            <div className="container mx-auto flex">
                <div className="w-1/2">
                    <Image
                        src="/images/content/your-city.png"
                        alt="Запустить PHP-сообщество в своем городе"
                        width={560}
                        height={449}
                    />
                </div>
                <div className="w-1/2 bg-blue p-[60px]">
                    <div className="text-[42px] font-bold leading-[1.23] text-white">
                        Запустить PHP-сообщество в своем городе
                    </div>
                    <div className="my-[24px] h-[3px] w-[50px] bg-white opacity-60" />
                    <div className="text-[20px] font-light leading-[1.55] text-white">
                        В этой статье на Хабре{' '}
                        <Link
                            className="text-link underline underline-offset-4 transition hover:opacity-70"
                            href="https://habr.com/ru/company/skyeng/blog/480484/"
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
