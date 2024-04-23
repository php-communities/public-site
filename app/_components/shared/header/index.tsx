import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed left-0 top-0 z-[100] w-full bg-blue">
            <div className="container mx-auto">
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
        </header>
    );
}
