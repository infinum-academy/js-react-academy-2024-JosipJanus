import { StarRating } from '@/shared/components/StarRating';
import { Review } from '@/types/review.type';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';

export type ReviewItemProps = {
    review: Review;
    onDelete: (id: string) => void;
};

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
    const [reviewRating, setReviewRating] = useState<number>(review.rating);

    return (
        <div style={{ display: 'flex', width: '480px' }}>
            <Card w={'100%'} backgroundColor={'#371686'} color={'white'}>
                <CardHeader>
                    <p>{review.email}</p>
                </CardHeader>
                <CardBody>
                    <div>
                        <div>{review.review}</div>
                    </div>
                    <div>Rating: {review.rating}</div>
                    <StarRating
                        rating={review.rating}
                        onChange={setReviewRating}
                    />
                </CardBody>
                <CardFooter justifyContent={'flex-end'}>
                    <Button
                        onClick={() => onDelete(review.id)}
                        colorScheme="red"
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
