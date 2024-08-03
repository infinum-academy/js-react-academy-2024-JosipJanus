import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';
import { Button, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

export const PickerButtons = () => {
    const {
        currentStep,
        selectedShows,
        allShows,
        setAllShows,
        setCurrentStep,
        setSelectedShows,
    } = useContext(PickerContext);

    const excludeSelectedShows = () => {
        const newShows = allShows.filter((show) => {
            return !selectedShows.includes(show);
        });
        setAllShows(newShows);
    };

    const unexcludeSelectedShows = () => {
        const newShows = allShows.concat(selectedShows);
        setAllShows(newShows);
    };

    return (
        <Flex width="100%" gap={4}>
            {currentStep > 0 && currentStep !== 3 && (
                <Button
                    onClick={() => {
                        setCurrentStep(currentStep - 1);
                        unexcludeSelectedShows();
                    }}
                >
                    Previous step
                </Button>
            )}

            {currentStep !== 3 && (
                <Button
                    _disabled={{
                        bg: 'error',
                    }}
                    isDisabled={selectedShows.length === 0}
                    onClick={() => {
                        setCurrentStep(currentStep + 1);
                        excludeSelectedShows();
                    }}
                >
                    Next step
                </Button>
            )}
            {currentStep === 3 && (
                <Button
                    as={NextLink}
                    href={'/shows'}
                    onClick={() => {
                        unexcludeSelectedShows();
                        setSelectedShows([]);
                        setCurrentStep(0);
                    }}
                >
                    All shows
                </Button>
            )}
        </Flex>
    );
};
