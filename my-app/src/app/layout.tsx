'use client';
import { Providers } from './providers';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{ height: '100%' }}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
