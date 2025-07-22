import Image from 'next/image';

import { basePath } from '~/lib/consts/base-path.mjs';

export function Main() {
    return (
        <div className="w-full bg-blue">
            <div className="container mx-auto pt-[42px] mb-[-16px] lg:pt-[100px] lg:mb-[-52px]">
                <a
                    href="https://conf.phpyh.ru"
                    target="_blank"
                    className="block relative"
                >
                    <span
                        className="flex justify-center px-3"
                        style={{background: '#030D1C', borderRadius: '6px'}}
                    >
                        <img
                            src="/images/phpyh-conf.svg"
                            alt="Пых.конф`25"
                            className="h-[48px] mt-[-3px] mb-[-10px] md:h-[72px] md:mt-[-5px] md:mb-[-15px]"
                        />
                    </span>
                    <span className="block text-center md:text-right pr-2 mt-2 md:mt-0">
                        19 сентября <span className="whitespace-nowrap">/ Москва + Онлайн</span>
                    </span>
                </a>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="py-14 lg:w-1/2 lg:py-28">
                        <div className="mb-10 font-inter text-[30px] font-black leading-snug text-white md:text-[40px] lg:text-[56px]">
                            PHP-сообщества в России, Беларуси, Украине
                        </div>
                        <div className="font-inter text-lg font-bold text-white">
                            Митапы и чаты по городам и фреймворкам.
                            <br />
                            Ссылки на видео со встреч.
                        </div>
                    </div>
                    <div className="flex lg:w-1/2 lg:items-end">
                        <Image
                            className="z-[1] object-cover"
                            src={`${basePath}/images/content/main-image.png`}
                            alt="PHP-сообщества в России, Беларуси, Украине"
                            width="630"
                            height="300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
