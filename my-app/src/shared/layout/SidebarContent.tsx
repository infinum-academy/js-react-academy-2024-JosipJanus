import { Flex } from '@chakra-ui/react';

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex
            h="100%"
            overflow="scroll"
            backgroundColor="darkPrimary"
            justifyContent="center"
        >
            {children}
        </Flex>
    );
};
