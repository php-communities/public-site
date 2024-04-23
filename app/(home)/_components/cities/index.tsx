import Link from 'next/link';

export function Cities() {
    return (
        <div className="w-full">
            <div className="container relative top-[-55px] mx-auto space-y-10 bg-white py-16 pl-28 pr-8">
                <div className="flex gap-x-5">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        БЕЛАРУСЬ
                    </div>
                    <div className="grid w-full grid-cols-5 gap-x-3 gap-y-5">
                        <Link
                            className="font-inter text-xl font-light text-gray-dark transition hover:text-blue-dark"
                            href="#mns"
                        >
                            Минск
                        </Link>
                    </div>
                </div>

                <div className="flex gap-x-5">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        РОССИЯ
                    </div>
                    <div className="grid w-full grid-cols-5 gap-x-3 gap-y-5">
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

                <div className="flex gap-x-5">
                    <div className="flex h-[28px] w-[100px] items-center font-inter text-xs font-bold uppercase text-gray">
                        УКРАИНА
                    </div>
                    <div className="grid w-full grid-cols-5 gap-x-3 gap-y-5">
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
