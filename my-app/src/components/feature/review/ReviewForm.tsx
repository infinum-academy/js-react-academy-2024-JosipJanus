import { StarRating } from '@/shared/components/StarRating';
import { generateRandomEmailAddress } from '@/shared/utils/random-email.generator';
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
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

export type ReviewFormProps = {
    addShowReview: (review: Review) => void;
};

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
    const [rating, setRating] = useState<number>(0);
    const {
        formState: { isSubmitting },
        handleSubmit,
    } = useForm();

    const onSubmitHandler = () => {
        const reviewInputElement = document.getElementById(
            'review-input'
        ) as HTMLFormElement;

        const value = reviewInputElement.value;

        const newReview: Review = {
            id: crypto.randomUUID().toString(),
            email: generateRandomEmailAddress(),
            review: value,
            rating,
        };

        addShowReview(newReview);
        setRating(0);
        reviewInputElement.value = '';
    };

    return (
        <Box
            display="flex"
            flexDir="column"
            gap={4}
            min-width="480px"
            as="form"
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <Card backgroundColor="#371686">
                <CardBody width="480px">
                    <FormControl isRequired={true} isDisabled={isSubmitting}>
                        <Flex flexDirection="column" gap={4}>
                            <Input
                                id="review-input"
                                variant="filled"
                                placeholder="Add your review"
                                _focus={{ color: 'white' }}
                                _active={{ color: 'white' }}
                            />

                            <StarRating
                                submitting={isSubmitting}
                                rating={rating}
                                onChange={setRating}
                            />

                            <Button
                                isLoading={isSubmitting}
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
