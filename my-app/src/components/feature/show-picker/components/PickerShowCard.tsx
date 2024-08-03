import { IShow } from '@/types/show.type';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { PickerContext } from './PickerContextProvider';

export const PickerShowCard = (show: IShow) => {
    const { selectedShows } = useContext(PickerContext);

    return (
        <Card
            overflow="hidden"
            width={120}
            borderRadius={24}
            data-testid="show-card"
        >
            <CardBody padding={0}>
                {
                    <Image
                        width={120}
                        height={200}
                        src={
                            show.image_url ??
                            'https://fakeimg.pl/640x480?text=Placeholder'
                        }
                        alt={
                            show.image_url
                                ? 'Tko pjeva zlo ne misli'
                                : 'Placeholder image'
                        }
                    />
                }
            </CardBody>
            <CardFooter
                display="flex"
                flexDirection="column"
                backgroundColor={
                    selectedShows.find(
                        (selectedShow) => selectedShow.id === show.id
                    )
                        ? 'green'
                        : 'white'
                }
            >
                <Text fontWeight="bold" as="h2">
                    {show.title}
                </Text>
                <Box as="span" display="flex" alignItems="center" gap={2}>
                    <StarIcon color="gold" />
                    <Text as="span" data-testid="rating">
                        {show.average_rating}/5
                    </Text>
                </Box>
            </CardFooter>
        </Card>
    );
};
