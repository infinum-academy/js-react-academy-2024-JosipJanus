import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';
import { Flex } from '@chakra-ui/react';
import { ShowCard } from '../../shows/ShowCard/ShowCard';

export const PickedShows = () => {
    const { selectedShows } = useContext(PickerContext);

    return (
        <Flex width="100%" wrap="wrap" gap={4}>
            {selectedShows.map((show) => (
                <Flex
                    key={show.id}
                    direction="row"
                    justifyContent="space-between"
                >
                    <ShowCard
                        id={show.id}
                        title={show.title}
                        description={show.description}
                        image_url={show.image_url}
                    />
                </Flex>
            ))}
        </Flex>
    );
};
