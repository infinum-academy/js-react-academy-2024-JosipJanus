import { Review } from '@/types/review.type';
import { Fragment } from 'react';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';

export type ShowReviewSectionProps = {
    reviews: Array<Review>;
    onDeleteReview: (id: string) => void;
    onAddShowReview: (review: Review) => void;
};

export const ShowReviewSection = ({
    reviews,
    onDeleteReview,
    onAddShowReview,
}: ShowReviewSectionProps) => {
    return (
        <Fragment>
            <ReviewForm addShowReview={onAddShowReview} />
            <ReviewList onDeleteReview={onDeleteReview} reviews={reviews} />
        </Fragment>
    );
};
