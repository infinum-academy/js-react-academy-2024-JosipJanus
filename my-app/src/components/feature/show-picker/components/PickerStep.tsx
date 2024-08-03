import { Box, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';
import { PickerShowCard } from './PickerShowCard';

export const PickerStep = () => {
    const { currentStep, allShows, selectedShows, setSelectedShows } =
        useContext(PickerContext);

    return (
        <Flex wrap="wrap" gap={4}>
            {allShows?.map((show, index) => {
                const isSelected = selectedShows?.find(
                    (selectedShow) => selectedShow === show
                );
                return (
                    <Box
                        as="button"
                        onClick={
                            isSelected
                                ? () => {
                                      setSelectedShows(
                                          selectedShows.filter(
                                              (s) => s !== show
                                          )
                                      );
                                  }
                                : () => {
                                      setSelectedShows([
                                          ...selectedShows,
                                          show,
                                      ]);
                                  }
                        }
                        key={index}
                    >
                        <PickerShowCard
                            id={show.id}
                            title={show.title}
                            average_rating={show.average_rating}
                            description={show.description}
                            image_url={show.image_url}
                        />
                    </Box>
                );
            })}
        </Flex>
    );
};
