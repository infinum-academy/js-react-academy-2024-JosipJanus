import { StarRating } from '@/shared/components/StarRating';
import { generateRandomEmailAddress } from '@/shared/utils/random-email.generator';
import { Review } from '@/types/review.type';
import { Box, Button, Card, CardBody, Input } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';

export type ReviewFormProps = {
    addShowReview: (review: Review) => void;
};

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
    const [rating, setRating] = useState<number>(0);

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
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
            onSubmit={(e: FormEvent) => onSubmitHandler(e)}
        >
            <Card backgroundColor={'#371686'}>
                <CardBody display={'flex'} flexDirection={'column'} gap={4}>
                    <Input
                        id="review-input"
                        variant={'filled'}
                        placeholder="Add your review"
                        _focus={{ color: 'white' }}
                        _active={{ color: 'white' }}
                    />

                    <StarRating rating={rating} onChange={setRating} />

                    <Button type="submit">Submit review</Button>
                </CardBody>
            </Card>
        </Box>
    );
};
