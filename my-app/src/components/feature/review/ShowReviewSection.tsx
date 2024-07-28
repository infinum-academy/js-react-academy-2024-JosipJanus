import { Review } from '@/types/review.type';
import { Fragment } from 'react';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';

export type ShowReviewSectionProps = {
    reviews: Array<Review>;
    onDeleteReview: (id: string) => void;
    showId: string;
};

export const ShowReviewSection = ({
    reviews,
    showId,
    onDeleteReview,
}: ShowReviewSectionProps) => {
    return (
        <Fragment>
            <ReviewForm show_id={showId} />
            <ReviewList onDeleteReview={onDeleteReview} reviews={reviews} />
        </Fragment>
    );
};
