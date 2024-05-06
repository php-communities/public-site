import Link from 'next/link';

import { GithubIcon } from '@/_components/shared/footer/github';

export function Footer() {
    return (
        <header className="w-full bg-blue-dark">
            <div className="container mx-auto pb-[25px] pt-[75px] lg:pb-[50px] lg:pt-[150px]">
                <div className="mb:text-[48px] mx-auto mb-[24px] max-w-[600px] text-center text-[30px] font-bold leading-[1.23] text-white">
                    Если есть желание внести изменение - сделай pull request
                </div>
                <Link
                    className="mx-auto mb-[100px] block w-[64px]"
                    href="https://github.com/php-communities/public-site"
                >
                    <GithubIcon className="fill-white transition hover:fill-black" />
                </Link>
                <div className="text-center font-light text-white">
                    Сайт поддерживается php сообществом в{' '}
                    <a href="https://github.com/php-communities/public-site" target="_blank">
                        open source
                    </a>{' '}
                    и ребятами из{' '}
                    <a href="https://webpractik.ru" target="_blank">
                        Вебпрактик
                    </a>
                    .
                </div>
            </div>
        </header>
    );
}
