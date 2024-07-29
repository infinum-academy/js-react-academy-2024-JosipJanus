'use client';

import { SidebarContent } from '@/shared/layout/SidebarContent';
import { SidebarNavigation } from '@/shared/layout/SidebarNavigation';
import { Flex } from '@chakra-ui/react';
import React, { Fragment } from 'react';

export default function ShowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Flex direction={{ base: 'column', md: 'row' }}>
            <SidebarNavigation />
            <SidebarContent>{children}</SidebarContent>
        </Flex>
    );
}
