import { deleteReviewItem } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { StarRating } from '@/shared/components/StarRating';
import { Review } from '@/types/review.type';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { Box, Button, Flex } from '@chakra-ui/react';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

export type ReviewItemProps = {
    review: Review;
};

export const ReviewItem = ({ review }: ReviewItemProps) => {
    const { trigger, isMutating } = useSWRMutation(
        swrKeys.deleteReview(review.id),
        deleteReviewItem,
        {
            onSuccess: () => {
                mutate(swrKeys.showReviews(review.show_id.toString()));
            },
        }
    );

    return (
        <Flex w="480px" data-testid="review-item">
            <Card w="100%" backgroundColor="#371686" color="white">
                <CardBody>
                    <Box>
                        <Box>{review.comment}</Box>
                    </Box>
                    <Box>Rating: {review.rating}</Box>
                    <StarRating rating={review.rating} />
                </CardBody>
                <CardFooter justifyContent="flex-end">
                    <Button
                        onClick={() => trigger(review.id)}
                        colorScheme="red"
                        isLoading={isMutating}
                        loadingText="Deleting review..."
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </Flex>
    );
};
