import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Sidebar } from '@/shared/layout/Sidebar';
import { SidebarContent } from '@/shared/layout/SidebarContent';
import styles from './page.module.css';

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
                <Providers>
                    <Sidebar />
                    <SidebarContent>{children}</SidebarContent>
                </Providers>
            </body>
        </html>
    );
}
