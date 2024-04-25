import Link from 'next/link';

import { GithubIcon } from '@/_components/shared/footer/github';

export function Footer() {
    return (
        <header className="w-full bg-blue-dark">
            <div className="container mx-auto pb-[50px] pt-[150px]">
                <div className="mx-auto mb-[24px] text-center text-[48px] font-bold leading-[1.23] text-white">
                    Если есть желание внести изменение - <br />
                    сделай pull request
                </div>
                <Link
                    className="mx-auto mb-[100px] block w-[64px]"
                    href="https://github.com/php-communities/public-site"
                >
                    <GithubIcon className="fill-white transition hover:fill-black" />
                </Link>
                <div className="text-center font-light text-white">
                    Сайт поддерживается через open source и ребятами из Вебпрактик.
                </div>
            </div>
        </header>
    );
}
