import { getShows } from '@/fetchers/show';
import useSWR from 'swr';
import { ShowList } from './ShowList/ShowList';
import { Box, BoxProps } from '@chakra-ui/react';

interface IShowListSectionProps extends BoxProps {}

export const ShowListSection = (props: IShowListSectionProps) => {
    const {
        data: showsResponse,
        error,
        isLoading,
    } = useSWR('/shows', getShows);

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
