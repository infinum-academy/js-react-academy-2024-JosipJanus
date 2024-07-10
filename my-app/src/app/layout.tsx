import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { Sidebar } from './sidebar';
import { SideBarContent } from './sidebarcontent';

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
                style={{
                    backgroundColor: '#1B004C',
                    padding: '0',
                    margin: '0',
                }}
            >
                <Providers>{children} </Providers>
            </body>
        </html>
    );
}
