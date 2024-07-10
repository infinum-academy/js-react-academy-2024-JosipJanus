import { ShowsContainer } from '@/components/feature/shows/ShowsContainer';
import { Flex } from '@chakra-ui/react';

export const SideBarContent = () => {
    return (
        <Flex
            h="100%"
            w="100%"
            backgroundColor="#1B004C"
            justifyContent="center"
        >
            <ShowsContainer />
        </Flex>
    );
};
