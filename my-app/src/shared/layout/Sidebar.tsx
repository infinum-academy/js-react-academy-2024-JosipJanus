import { swrKeys } from '@/fetchers/swrKeys';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { mutate } from 'swr';

export const Sidebar = () => {
    const onLogout = () => {
        localStorage.clear();

        mutate(swrKeys.user, null);
    };

    return (
        <Flex
            flexDirection="column"
            height="100%"
            backgroundColor="#1B004C"
            padding={2}
            color="white"
            max-width="300px"
            justify={'space-between'}
        >
            <Box>
                <Box fontWeight="bold" padding={2}>
                    TV shows app
                </Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <NextLink href={'/shows'}>All shows</NextLink>
                </Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <NextLink href={'/top-rated'}>Top rated</NextLink>
                </Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <NextLink href={'/my-profile'}>My profile</NextLink>
                </Box>
            </Box>
            <Box backgroundColor="#1B004C" padding={6} width="300px">
                <Button onClick={onLogout}>Logout</Button>
            </Box>
        </Flex>
    );
};

export const SideBarItem = (href: string, text: string) => {
    return (
        <Box
            flexDirection="column"
            h="100%"
            backgroundColor="#1B004C"
            padding={6}
            width="300px"
        >
            <Link href={href}>text</Link>
        </Box>
    );
};
