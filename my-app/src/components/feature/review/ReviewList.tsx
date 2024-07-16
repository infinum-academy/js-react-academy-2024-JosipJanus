import { Review } from '@/types/review.type';
import { ReviewItem } from './ReviewItem/ReviewItem';

export type ReviewListProps = {
    reviews: Array<Review>;
    onDeleteReview: (id: string) => void;
};

export const ReviewList = ({ reviews, onDeleteReview }: ReviewListProps) => {
    return reviews.map((review: Review, index: number) => {
        return (
            <ReviewItem key={index} review={review} onDelete={onDeleteReview} />
        );
    });
};
