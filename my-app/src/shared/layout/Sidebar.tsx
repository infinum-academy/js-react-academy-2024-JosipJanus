import { Box, Flex, Link } from '@chakra-ui/react';

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
// TODO: Why not full height ???
export const Sidebar = () => {
    return (
        <Flex
            flexDirection="column"
            height="100%"
            backgroundColor="#1B004C"
            padding={2}
            color="white"
            max-width="300px"
        >
            <Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <Link href={'all-shows'}>All shows</Link>
                </Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <Link href={'Top rated'}>Top rated</Link>
                </Box>
                <Box backgroundColor="#1B004C" padding={6} width="300px">
                    <Link href={'my-profile'}>My profile</Link>
                </Box>
            </Box>
            <Box backgroundColor="#1B004C" padding={6} width="300px">
                <Link href={'logout'}>Logout</Link>
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
