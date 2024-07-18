'use client';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ height: '100%' }}>
            <body
                className={inter.className}
                style={{
                    backgroundColor: '#1B004C',
                    padding: '0',
                    margin: '0',
                    display: 'flex',
                    height: '100%',
                }}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
