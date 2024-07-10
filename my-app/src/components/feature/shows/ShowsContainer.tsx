'use client';
import { initialShowDetails } from '@/shared/utils/initial-show-details';
import { Review } from '@/types/review.type';
import { IShow } from '@/types/show.type';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ShowReviewSection } from '../review/ShowReviewSection';
import { ShowDetails } from './ShowDetails';

const REVIEWS_KEY = 'reviews';

export interface IShowContainerProps {
    showDetails: IShow;
}

export const ShowsContainer = ({ showDetails }: IShowContainerProps) => {
    const [reviewList, setReviewList] = useState([] as Array<Review>);
    const [show, setShow] = useState<IShow>(showDetails);

    useEffect(() => {
        const loadedReviews = loadFromLocalStorage();
        setReviewList(loadedReviews);

        setShow({
            ...initialShowDetails(),
            average_rating: calculateaverage_rating(loadedReviews),
        });
    }, []);

    const saveToLocalStorage = (reviewList: Array<Review>) => {
        localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewList));
    };

    const calculateaverage_rating = (reviews: Array<Review>): number => {
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
            average_rating: calculateaverage_rating(reviews),
        });
        saveToLocalStorage(reviews);
    };

    const onDeleteShowReview = (id: string) => {
        const reviews = loadFromLocalStorage();
        const newReviews = reviews.filter((r) => r.id !== id);
        setReviewList(newReviews);
        setShow({
            ...initialShowDetails(),
            average_rating: calculateaverage_rating(newReviews),
        });
        saveToLocalStorage(newReviews);
    };

    return (
        <Flex flexDirection="column" gap={10}>
            <ShowDetails showDetails={show} /> TODO: Move to separate route
            <ShowReviewSection
                onAddShowReview={onAddShowReview}
                onDeleteReview={onDeleteShowReview}
                reviews={reviewList}
            />
        </Flex>
    );
};
