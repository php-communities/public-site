import Link from 'next/link';

export function Cities() {
    return (
        <div className="w-full lg:scroll-mt-[68px]" id="city">
            <div className="container relative top-[-35px] mx-auto space-y-10 bg-white px-8 py-16 md:pl-14 lg:top-[-55px] lg:pl-28">
                <div className="flex flex-col gap-x-5 md:flex-row">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        БЕЛАРУСЬ
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#mns"
                        >
                            Минск
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-x-5 md:flex-row">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        РОССИЯ
                    </div>
                    <div className="grid w-full grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#vrn"
                        >
                            Воронеж
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#dgs"
                        >
                            Дагестан
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#ekb"
                        >
                            Екатеринбург
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#ivn"
                        >
                            Иваново
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#irk"
                        >
                            Иркутск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#izh"
                        >
                            Ижевск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#yola"
                        >
                            Йошкар-Ола
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#kzn"
                        >
                            Казань
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#kld"
                        >
                            Калининград
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#krd"
                        >
                            Краснодар
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#krk"
                        >
                            Красноярск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#lip"
                        >
                            Липецк
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#msk"
                        >
                            Москва
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#nn"
                        >
                            Нижний Новгород
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#nsk"
                        >
                            Новосибирск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#rnd"
                        >
                            Ростов
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#smr"
                        >
                            Самара
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#spb"
                        >
                            Санкт-Петербург
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#srt"
                        >
                            Саратов
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#tyum"
                        >
                            Тюмень
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#tms"
                        >
                            Томск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#ulk"
                        >
                            Ульяновск
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#ufa"
                        >
                            Уфа
                        </Link>
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#yrs"
                        >
                            Ярославль
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-x-5 md:flex-row">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        УКРАИНА
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#hrk"
                        >
                            Харьков
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
