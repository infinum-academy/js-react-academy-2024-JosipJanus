import { IShow } from '@/types/show.type';
import { Flex } from '@chakra-ui/react';
import { ShowCard } from '../ShowCard/ShowCard';

export interface IShowListProps {
    shows: IShow[];
}

export const ShowList = ({ shows }: IShowListProps) => {
    return (
        <Flex wrap="wrap" gap="40px">
            {shows.map((show, index) => {
                return <ShowCard key={index} {...show} />;
            })}
        </Flex>
    );
};
