import { StarIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

export type StarRatingProps = {
    rating: number;
    onChange?: (rating: number) => void;
};

export const StarRating = ({ rating, onChange }: StarRatingProps) => {
    const [hover, setHover] = useState<number>(0);

    return (
        <Flex onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((_, index) => {
                return (
                    <StarIcon
                        key={index}
                        color={index < (rating || hover) ? 'gold' : 'white'}
                        onMouseEnter={() => setHover(index + 1)}
                        onClick={() => onChange?.(index + 1)}
                        pointerEvents={onChange ? 'auto' : 'none'}
                    />
                );
            })}
        </Flex>
    );
};
