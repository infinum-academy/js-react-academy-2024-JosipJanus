'use client';
import { initialShowDetails } from '@/shared/utils/initial-show-details';
import { Review } from '@/types/review.type';
import { IShow } from '@/types/show.type';
import { Fragment, useEffect, useState } from 'react';
import { ShowReviewSection } from '../review/ShowReviewSection';
import ShowDetails from './ShowDetails';
import { init } from 'next/dist/compiled/webpack/webpack';

const REVIEWS_KEY = 'reviews';

export const ShowsContainer = () => {
    const [reviewList, setReviewList] = useState([] as Array<Review>);
    const [show, setShow] = useState<IShow>(initialShowDetails());

    useEffect(() => {
        const loadedReviews = loadFromLocalStorage();
        setReviewList(loadedReviews);

        setShow({
            ...initialShowDetails(),
            averageRating: calculateAverageRating(loadedReviews),
        });
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
        setShow({
            ...initialShowDetails(),
            averageRating: calculateAverageRating(reviews),
        });
        saveToLocalStorage(reviews);
    };

    const onDeleteShowReview = (id: string) => {
        const reviews = loadFromLocalStorage();
        const newReviews = reviews.filter((r) => r.id !== id);
        setReviewList(newReviews);
        setShow({
            ...initialShowDetails(),
            averageRating: calculateAverageRating(newReviews),
        });
        saveToLocalStorage(newReviews);
    };

    return (
        <Fragment>
            <ShowDetails showDetails={show} />
            <ShowReviewSection
                onAddShowReview={onAddShowReview}
                onDeleteReview={onDeleteShowReview}
                reviews={reviewList}
            />
        </Fragment>
    );
};
