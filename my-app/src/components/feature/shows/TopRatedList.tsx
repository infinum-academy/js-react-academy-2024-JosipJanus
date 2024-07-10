import { IShow } from '@/types/show.type';
import { Flex } from '@chakra-ui/react';
import { ShowCard } from './ShowCard/ShowCard';

export interface ITopRatedListProps {
    shows: IShow[];
}

export const ShowList = ({ shows }: ITopRatedListProps) => {
    return (
        <Flex wrap="wrap" gap="40px">
            {shows.map((show, index) => {
                return (
                    <ShowCard
                        key={index}
                        id={show.id}
                        title={show.title}
                        description={show.description}
                        image_url={show.image_url ?? ''}
                        average_rating={show.average_rating ?? 0}
                    />
                );
            })}
        </Flex>
    );
};
