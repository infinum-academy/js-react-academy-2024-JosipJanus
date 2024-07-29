import { IShow } from '@/types/show.type';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Text,
    Image,
} from '@chakra-ui/react';

export type ShowDetailsProps = {
    showDetails: IShow;
};

export const ShowDetails = ({
    showDetails: { title, description, image_url, average_rating },
}: ShowDetailsProps) => {
    return (
        <Card width={480}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {
                        <Image
                            width={480}
                            height={480}
                            src={
                                image_url ??
                                'https://fakeimg.pl/640x480?text=Placeholder'
                            }
                            alt={
                                image_url
                                    ? 'Tko pjeva zlo ne misli'
                                    : 'Placeholder image'
                            }
                        />
                    }
                </CardBody>
                <CardFooter display="flex" flexDirection="column">
                    <Heading as="h2">{title}</Heading>
                    <Box>{description}</Box>
                    {average_rating !== 0 ? (
                        <Text fontWeight="bold">Rating: {average_rating}</Text>
                    ) : (
                        <Text>No rating</Text>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
};
