'use client';

import { Sidebar } from '@/shared/layout/Sidebar';
import { SidebarContent } from '@/shared/layout/SidebarContent';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerOverlay,
    Show,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React, { Fragment, Suspense } from 'react';
import Loading from './loading';

export default function ShowsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Fragment>
            <Box display={{ md: 'flex' }}>
                <Show above="md">
                    <Sidebar />
                </Show>

                <Show below="md">
                    <Box
                        display="flex"
                        color="white"
                        width="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        bg="darkPrimary"
                    >
                        <Text fontSize="2xl" p="4">
                            TV Show App
                        </Text>
                        <Button
                            colorScheme="darkPurple"
                            leftIcon={<HamburgerIcon />}
                            onClick={onOpen}
                        ></Button>
                    </Box>
                </Show>
                <SidebarContent>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </SidebarContent>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Sidebar />
                </DrawerContent>
                <DrawerFooter>
                    <Button
                        color={'white'}
                        onClick={onClose}
                        leftIcon={<CloseIcon />}
                    />
                </DrawerFooter>
            </Drawer>
        </Fragment>
    );
}
