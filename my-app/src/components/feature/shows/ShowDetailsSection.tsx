import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { Box, BoxProps } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { IShow } from '@/types/show.type';
import { ShowsDetailsContainer } from './ShowDetailsContainer';

export interface IShowDetailsProps extends BoxProps {}

export const ShowDetailsSection = (props: IShowDetailsProps) => {
    const params = useParams();
    const {
        data: showDetailsResponse,
        error,
        isLoading,
    } = useSWR<{ show: IShow }>(
        swrKeys.showDetail(params.id as string),
        fetcher
    );

    if (error) {
        return <div>Boohoo something went wrong...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const show = showDetailsResponse!;
    return (
        <Box {...props}>
            <ShowsDetailsContainer showDetails={show.show} />
        </Box>
    );
};
