import { Flex } from '@chakra-ui/react';

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex
            h="100%"
            width="100%"
            grow={1}
            backgroundColor="darkPrimary"
            justifyContent="center"
        >
            {children}
        </Flex>
    );
};
