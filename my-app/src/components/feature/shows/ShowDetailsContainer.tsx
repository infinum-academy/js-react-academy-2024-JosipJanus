'use client';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { Review } from '@/types/review.type';
import { IShow } from '@/types/show.type';
import { Flex } from '@chakra-ui/react';
import useSWR from 'swr';
import { ShowReviewSection } from '../review/ShowReviewSection';
import { ShowDetails } from './ShowDetails';

export interface IShowContainerProps {
    showDetails: IShow;
}

export const ShowsDetailsContainer = ({ showDetails }: IShowContainerProps) => {
    const { data, error, isLoading } = useSWR<{ reviews: Array<Review> }>(
        swrKeys.showReviews(showDetails.id),
        fetcher,
        {
            revalidateOnFocus: true,
        }
    );

    if (error) {
        return <div>Boohoo something went wrong...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const onDeleteShowReview = (id: string) => {};

    const reviewList = data?.reviews || [];

    return (
        <Flex flexDirection="column" gap={10}>
            <ShowDetails showDetails={showDetails} />
            <ShowReviewSection
                onDeleteReview={onDeleteShowReview}
                reviews={reviewList}
                showId={showDetails.id}
            />
        </Flex>
    );
};
