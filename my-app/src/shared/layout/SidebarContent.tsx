import { Flex } from '@chakra-ui/react';

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex
            h="100%"
            w="100%"
            backgroundColor="#1B004C"
            justifyContent="center"
        >
            {children}
        </Flex>
    );
};
