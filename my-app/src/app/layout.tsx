'use client';
import { Providers } from './providers';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ height: '100%' }}>
            <body
                style={{
                    backgroundColor: 'primary',
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
