import Image from 'next/image';

import { basePath } from '~/lib/consts/base-path.mjs';

export function Main() {
    return (
        <div className="w-full bg-blue">
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
