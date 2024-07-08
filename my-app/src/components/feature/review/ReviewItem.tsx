import { Review } from '@/types/review.type';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Button } from '@chakra-ui/react';

export type ReviewItemProps = {
    review: Review;
    onDelete: (id: string) => void;
};

export const ReviewItem = ({ review, onDelete }: ReviewItemProps) => {
    return (
        <div style={{ display: 'flex', width: '480px' }}>
            <Card w={'100%'}>
                <CardHeader>
                    <p>{review.email}</p>
                </CardHeader>
                <CardBody>
                    <div>
                        <div>{review.review}</div>
                    </div>
                    <div>Rating: {review.rating}</div>
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
