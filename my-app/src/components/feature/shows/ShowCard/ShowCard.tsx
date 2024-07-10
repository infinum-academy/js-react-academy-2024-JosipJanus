import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

export interface IShowProps {
    id: string;
    title: string;
    description: string;
    image_url: string;
    average_rating: number;
}

export const ShowCard = ({
    id,
    title,
    description,
    image_url,
    average_rating,
}: IShowProps) => {
    return (
        <Card
            as={NextLink}
            overflow={'hidden'}
            width={240}
            href={`/shows/${id}`}
        >
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {
                        <Image
                            width={240}
                            height={420}
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
                <CardFooter display={'flex'} flexDirection={'column'}>
                    <Text fontWeight="bold" as={'h2'}>
                        {title}
                    </Text>
                    <Box>{description}</Box>
                    {average_rating !== 0 ? (
                        <Text>
                            Rating: <Text id="rating">{average_rating}</Text>
                        </Text>
                    ) : (
                        <Text>No rating</Text>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
};
