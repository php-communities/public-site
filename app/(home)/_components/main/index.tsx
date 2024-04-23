import Image from 'next/image';

export function Main() {
    return (
        <div className="w-full bg-blue">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-1/2 py-28">
                        <div className="mb-10 font-inter text-[56px] font-black leading-snug text-white">
                            PHP-сообщества в России, Беларуси, Украине
                        </div>
                        <div className="font-inter text-lg font-bold text-white">
                            Митапы и чаты по городам и фреймворкам.
                            <br />
                            Ссылки на видео со встреч.
                        </div>
                    </div>
                    <div className="flex w-1/2 items-end">
                        <Image
                            className="z-[1] object-cover"
                            src="/images/content/main-image.png"
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
