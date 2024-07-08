import { Show } from '@/types/show.type';
import { Card, CardBody, CardFooter, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function ShowDetails(show: Show) {
    return (
        <Card overflow={'hidden'}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {show.imageUrl ? (
                        <Image
                            width={480}
                            height={640}
                            src={show.imageUrl ?? ''}
                            alt="Tko pjeva zlo ne misli"
                        />
                    ) : (
                        <Image
                            width={480}
                            height={480}
                            src="https://fakeimg.pl/640x480?text=Placeholder"
                            alt="Placeholder image"
                        />
                    )}
                </CardBody>
                <CardFooter
                    display={'flex'}
                    flexDirection={'column'}
                    width={480}
                >
                    <h2>{show.title}</h2>
                    <div>{show.description}</div>
                    {show.averageRating ? (
                        <div>Rating: {show.averageRating}</div>
                    ) : (
                        <div>No rating</div>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
}
