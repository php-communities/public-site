'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="z-[100] w-full bg-blue lg:fixed lg:left-0 lg:top-0">
            <div className="container mx-auto hidden lg:block">
                <div className="flex justify-end py-6">
                    <div className="flex space-x-8">
                        <Link
                            className="font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                            href="#city"
                        >
                            По городам
                        </Link>
                        <Link
                            className="font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                            href="#chat"
                        >
                            Чаты, каналы, подкасты
                        </Link>
                        <Link
                            className="font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                            href="#start"
                        >
                            Запустить свое сообщество
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-end bg-black p-5 lg:hidden">
                <button
                    type="button"
                    className="flex flex-col items-center justify-center"
                    onClick={toggleMenu}
                >
                    <span
                        className={`block h-0.5 w-6 rounded-sm bg-white 
                    transition-all duration-300 ease-out ${
                        isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
                    }`}
                    />
                    <span
                        className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span
                        className={`block h-0.5 w-6 rounded-sm bg-white 
                    transition-all duration-300 ease-out ${
                        isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
                    />
                </button>
            </div>
            <div
                className={` flex-col bg-black py-[20px] text-center lg:hidden ${isOpen ? 'flex' : 'hidden'}`}
            >
                <Link
                    className="py-[8px] font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                    href="#city"
                >
                    По городам
                </Link>
                <Link
                    className="py-[8px] font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                    href="#chat"
                >
                    Чаты, каналы, подкасты
                </Link>
                <Link
                    className="py-[8px] font-inter text-sm font-medium uppercase text-white transition hover:text-blue-dark"
                    href="#start"
                >
                    Запустить свое сообщество
                </Link>
            </div>
        </header>
    );
}
