import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';
import { Button, Flex } from '@chakra-ui/react';

export const PickerButtons = () => {
    const { currentStep, selectedShows, setCurrentStep } =
        useContext(PickerContext);

    return (
        <Flex width="100%" gap={4}>
            <Button onClick={() => setCurrentStep(currentStep - 1)}>
                Previous step
            </Button>
            <Button
                _disabled={{
                    bg: 'error',
                }}
                onClick={() => setCurrentStep(currentStep + 1)}
            >
                Next step
            </Button>
        </Flex>
    );
};
