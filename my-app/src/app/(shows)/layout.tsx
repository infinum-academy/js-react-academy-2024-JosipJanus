'use client';

import { SidebarContent } from '@/shared/layout/SidebarContent';
import { SidebarNavigation } from '@/shared/layout/SidebarNavigation';
import React, { Fragment } from 'react';

export default function ShowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Fragment>
            <SidebarNavigation />
            <SidebarContent>{children}</SidebarContent>
        </Fragment>
    );
}
