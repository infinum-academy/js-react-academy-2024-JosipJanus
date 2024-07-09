import { IShow } from '@/types/show.type';
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
export type ShowDetailsProps = {
    showDetails: IShow;
};

export default function ShowDetails({
    showDetails: { title, description, imageUrl, averageRating },
}: ShowDetailsProps) {
    return (
        <Card overflow={'hidden'} width={480}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {
                        <Image
                            width={480}
                            height={640}
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
                    <Heading as={'h2'}>{title}</Heading>
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
}
