import { StarRating } from '@/shared/components/StarRating';
import { Review } from '@/types/review.type';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export type ReviewItemProps = {
    review: Review;
    onDelete: (id: string) => void;
};

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
    const [reviewRating, setReviewRating] = useState<number>(review.rating);

    return (
        <Flex w="480px">
            <Card w="100%" backgroundColor="#371686" color="white">
                <CardHeader>
                    <Text>{review.email}</Text>
                </CardHeader>
                <CardBody>
                    <Box>
                        <Box>{review.review}</Box>
                    </Box>
                    <Box>Rating: {review.rating}</Box>
                    <StarRating rating={review.rating} />
                </CardBody>
                <CardFooter justifyContent="flex-end">
                    <Button
                        onClick={() => onDelete(review.id)}
                        colorScheme="red"
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </Flex>
    );
};
