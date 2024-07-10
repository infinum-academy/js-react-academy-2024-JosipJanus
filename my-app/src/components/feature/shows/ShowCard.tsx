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

export interface IShowProps {
    title: string;
    description: string;
    imageUrl: string;
    averageRating: number;
}

export const ShowCard = ({
    title,
    description,
    imageUrl,
    averageRating,
}: IShowProps) => {
    return (
        <Card overflow={'hidden'} width={240}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {
                        <Image
                            width={240}
                            height={420}
                            src={
                                imageUrl ??
                                'https://fakeimg.pl/640x480?text=Placeholder'
                            }
                            alt={
                                imageUrl
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
                    {averageRating !== 0 ? (
                        <Text>Rating: {averageRating}</Text>
                    ) : (
                        <Text>No rating</Text>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
};
