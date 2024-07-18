'use client';

import { Sidebar } from '@/shared/layout/Sidebar';
import { SidebarContent } from '@/shared/layout/SidebarContent';
import { Fragment, Suspense } from 'react';
import Loading from './loading';

export default function ShowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Fragment>
            <Sidebar />
            <SidebarContent>
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </SidebarContent>
        </Fragment>
    );
}
