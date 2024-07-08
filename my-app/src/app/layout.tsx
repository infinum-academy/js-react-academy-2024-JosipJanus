import { Providers } from './providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{ backgroundColor: '#200050' }}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
