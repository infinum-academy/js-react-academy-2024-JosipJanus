import {
    Box,
    Button,
    Container,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { PickerButtons } from './components/PickerButtons';
import { PickerProgress } from './components/PickerProgress';
import { PickerStepper } from './components/PickerStepper';

export const ShowPicker = () => {
    return (
        <>
            <Box color="white">
                <Flex direction="column" gap={4}>
                    <PickerStepper />
                    <Box>
                        <Flex direction="column" gap={4}>
                            <PickerProgress />
                            <PickerButtons />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
