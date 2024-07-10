import { getShow } from '@/fetchers/show';
import useSWR from 'swr';
import { ShowsContainer } from './ShowsContainer';
import { useParams } from 'next/navigation';
import { Box, BoxProps } from '@chakra-ui/react';

export interface IShowDetailsProps extends BoxProps {}

export const ShowDetailsSection = (props: IShowDetailsProps) => {
    const params = useParams();
    const {
        data: showDetailsResponse,
        error,
        isLoading,
    } = useSWR(`/${params.id}`, getShow);

    if (error) {
        return <div>Boohoo something went wrong...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const show = showDetailsResponse!;
    return (
        <Box {...props}>
            <ShowsContainer showDetails={show} />
        </Box>
    );
};
