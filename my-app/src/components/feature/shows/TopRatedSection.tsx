import { getTopRatedShows } from '@/fetchers/show';
import { Box, BoxProps } from '@chakra-ui/react';
import useSWR from 'swr';
import { ShowList } from './ShowList/ShowList';

interface ITopRatedSectionProps extends BoxProps {}

export const TopRatedSection = (props: ITopRatedSectionProps) => {
    const {
        data: showsResponse,
        error,
        isLoading,
    } = useSWR('top_rated', getTopRatedShows);

    if (error) {
        return <div>Boohoo something went wrong...</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const shows = showsResponse?.shows || [];
    return (
        <Box {...props}>
            <ShowList shows={shows} />
        </Box>
    );
};
