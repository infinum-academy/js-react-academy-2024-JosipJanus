'use client';
import { Review } from '@/types/review.type';
import { Show } from '@/types/show.type';
import { Fragment, useEffect, useState } from 'react';
import { ShowReviewSection } from '../review/ShowReviewSection';
import ShowDetails from './ShowDetails';

const REVIEWS_KEY = 'reviews';

const show: Show = {
    title: 'One song a day takes mischief away',
    description: `The story is seen through the eyes of 6 year old Perica Safranek. On a family picnic Perica's
    mother starts flirting with Mr Fulir, a Zagreb Dandy. The father at first doesn't notice it, but wants
    to marry off the aunt. After a couple of invitations to their Zagreb home, the father becomes aware
    of Fulir's passes at his wife...`,
    imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYTY1MzA0Y2ItOWUwMy00ZDA1LWI1NGQtMDlhYjBkYzRiNTVmXkEyXkFqcGdeQXVyMjI2NDIxNjI@._V1_FMjpg_UY644_.jpg',
    averageRating: 4.5,
};

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

    useEffect(() => {
        const loadedReviews = loadFromLocalStorage();
        setReviewList(loadedReviews);
    }, []);

    const saveToLocalStorage = (reviewList: Array<Review>) => {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewList));
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
        saveToLocalStorage(reviews);
    };

    const onDeleteShowReview = (id: string) => {
        const reviews = loadFromLocalStorage();
        const newReviews = reviews.filter((r) => r.id !== id);
        setReviewList(newReviews);
        saveToLocalStorage(newReviews);
    };

    return (
        <Fragment>
            <ShowDetails {...show} />
            <ShowReviewSection
                onAddShowReview={onAddShowReview}
                onDeleteReview={onDeleteShowReview}
                reviews={reviewList}
            />
        </Fragment>
    );
};
