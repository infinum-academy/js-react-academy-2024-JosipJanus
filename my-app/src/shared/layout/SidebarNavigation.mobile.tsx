import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    Button,
    useDisclosure,
    Show,
    Box,
    Text,
    Flex,
} from '@chakra-ui/react';
import { Sidebar } from './Sidebar';
import React from 'react';

export const SidebarNavigationMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Show below="md">
                <Flex
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
                </Flex>
            </Show>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
        </>
    );
};
