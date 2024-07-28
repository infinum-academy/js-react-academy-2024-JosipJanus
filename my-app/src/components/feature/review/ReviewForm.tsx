import { createReviewItem } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { StarRating } from '@/shared/components/StarRating';
import { Review } from '@/types/review.type';
import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    FormControl,
    Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';

export type ReviewFormProps = {
    show_id: string;
};

export const ReviewForm = ({ show_id }: ReviewFormProps) => {
    const [rating, setRating] = useState<number>(0);
    const {
        formState: { isSubmitting },
        register,
        handleSubmit,
        reset,
    } = useForm<Review>();
    const { trigger, isMutating } = useSWRMutation(
        swrKeys.postReview,
        createReviewItem,
        {
            onSuccess: () => {
                reset();
                setRating(0);
                mutate(swrKeys.showReviews(show_id));
            },
        }
    );

    const onReviewSubmit = async (data: Review) => {
        data.show_id = parseInt(show_id);
        data.rating = rating;
        console.log(data);
        await trigger(data);
    };

    return (
        <Box
            display="flex"
            flexDir="column"
            gap={4}
            min-width="480px"
            as="form"
            onSubmit={handleSubmit(onReviewSubmit)}
        >
            <Card backgroundColor="#371686">
                <CardBody width="480px">
                    <FormControl isRequired={true} isDisabled={isSubmitting}>
                        <Flex flexDirection="column" gap={4}>
                            <Input
                                id="review-input"
                                variant="filled"
                                placeholder="Add your review"
                                {...register('comment')}
                                _focus={{ color: 'white' }}
                                _active={{ color: 'white' }}
                            />

                            <StarRating rating={rating} onChange={setRating} />

                            <Button
                                isLoading={isMutating}
                                loadingText="Submitting review..."
                                type="submit"
                                width="fit-content"
                            >
                                Submit review
                            </Button>
                        </Flex>
                    </FormControl>
                </CardBody>
            </Card>
        </Box>
    );
};
