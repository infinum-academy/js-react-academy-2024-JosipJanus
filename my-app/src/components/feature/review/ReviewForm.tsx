import { generateRandomEmailAddress } from '@/shared/utils/random-email.generator';
import { Review } from '@/types/review.type';
import { Container } from '@chakra-ui/layout';
import { Button, Card, CardBody, Input } from '@chakra-ui/react';
import { FormEvent } from 'react';

export type ReviewFormProps = {
    addShowReview: (review: Review) => void;
};

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        const reviewInputElement = document.getElementById(
            'review-input'
        ) as HTMLFormElement;

        const reviewRatingElement = document.getElementById(
            'rating-input'
        ) as HTMLInputElement;

        const value = reviewInputElement.value;

        const newReview: Review = {
            id: crypto.randomUUID().toString(),
            email: generateRandomEmailAddress(),
            review: value,
            rating: parseInt(reviewRatingElement.value),
        };

        addShowReview(newReview);
        console.log('Adding new review');
        reviewInputElement.value = '';
        reviewRatingElement.value = '';
    };

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '480px',
            }}
            onSubmit={(e) => onSubmitHandler(e)}
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

                    <Input
                        id="rating-input"
                        variant={'filled'}
                        type="number"
                        min={1}
                        max={5}
                        width={'30%'}
                        placeholder="Rating"
                        _focus={{ color: 'white' }}
                        _active={{ color: 'white' }}
                    />

                    <Button type="submit">Submit review</Button>
                </CardBody>
            </Card>
        </form>
    );
};
