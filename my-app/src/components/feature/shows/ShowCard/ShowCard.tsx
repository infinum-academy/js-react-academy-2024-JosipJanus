import { IShow } from '@/types/show.type';
import { StarIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, CardFooter, Image, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const ShowCard = (show: IShow) => {
    return (
        <Card
            as={NextLink}
            overflow="hidden"
            width={240}
            href={`/shows/${show.id}`}
            borderRadius={24}
            data-testid="show-card"
        >
            <CardBody padding={0}>
                {
                    <Image
                        width={240}
                        height={420}
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
            <CardFooter display="flex" flexDirection="column">
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
