import '~/lib/styles/base.css';

import React, { ReactNode } from 'react';

import { inter } from '~/lib/fonts/inter';

export const metadata = {
    title: 'PHP-митапы, чаты и ютуб-каналы',
    description: 'Каталог полезных ссылок и архив встреч в 15+ городах России, Беларуси, Украины.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className={`${inter.variable} scroll-smooth`}>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
