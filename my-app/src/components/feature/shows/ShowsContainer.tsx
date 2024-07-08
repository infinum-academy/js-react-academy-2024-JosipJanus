'use client';
import { Review } from '@/types/review.type';
import { Fragment, useEffect, useState } from 'react';
import { ShowReviewSection } from '../review/ShowReviewSection';
import ShowDetails from './ShowDetails';
import { initialShowDetails } from '@/shared/utils/initial-show-details';

const REVIEWS_KEY = 'reviews';

const initialReviews: Array<Review> = [
    {
        id: '1',
        rating: 5,
        review: 'Great movie!',
        email: 'john.doe@somemail.com',
    },
];

export const ShowsContainer = () => {
    const [reviewList, setReviewList] = useState(initialReviews);
    const [rating, setShowRating] = useState(0);

    useEffect(() => {
        const loadedReviews = loadFromLocalStorage();
        setReviewList(loadedReviews);

        setShowRating(calculateAverageRating(loadedReviews));
    }, []);

    const saveToLocalStorage = (reviewList: Array<Review>) => {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewList));
    };

    const calculateAverageRating = (reviews: Array<Review>): number => {
        if (reviews.length === 0) return 0;
        return (
            reviews.reduce((acc, review) => acc + review.rating, 0) /
            reviews.length
        );
    };

    const loadFromLocalStorage = (): Array<Review> => {
        const reviews = localStorage.getItem(REVIEWS_KEY);
        if (reviews) {
            return JSON.parse(reviews);
        }
        return [];
    };

    const onAddShowReview = (review: Review) => {
        const reviews = loadFromLocalStorage();
        reviews.push(review);
        setReviewList(reviews);
        setShowRating(calculateAverageRating(reviews));
        saveToLocalStorage(reviews);
    };

    const onDeleteShowReview = (id: string) => {
        const reviews = loadFromLocalStorage();
        const newReviews = reviews.filter((r) => r.id !== id);
        setReviewList(newReviews);
        setShowRating(calculateAverageRating(newReviews));
        saveToLocalStorage(newReviews);
    };

    return (
        <Fragment>
            <ShowDetails
                {...{ showDetails: initialShowDetails(), showRating: rating }}
            />
            <ShowReviewSection
                onAddShowReview={onAddShowReview}
                onDeleteReview={onDeleteShowReview}
                reviews={reviewList}
            />
        </Fragment>
    );
};
