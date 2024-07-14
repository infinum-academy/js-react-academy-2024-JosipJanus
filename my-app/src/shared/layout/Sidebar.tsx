import { Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const navigationItems = [
    {
        href: '/all-shows',
        text: 'All shows',
    },
    {
        href: '/top-rated',
        text: 'Top rated',
    },
    {
        href: 'my-profile',
        text: 'My profile',
    },
    {
        href: 'my-profile',
        text: 'My profile',
    },
];
export const Sidebar = () => {
    const router = useRouter();

    const onLogout = () => {
        localStorage.clear();
        router.push('/login');
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
