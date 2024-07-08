import { Show } from '@/types/show.type';
import { Card, CardBody, CardFooter, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
export type ShowDetailsProps = {
    showDetails: Show;
    showRating: number;
};

export default function ShowDetails({
    showDetails: { title, description, imageUrl },
    showRating,
}: ShowDetailsProps) {
    return (
        <Card overflow={'hidden'} width={480}>
            <Flex direction={'column'}>
                <CardBody padding={0}>
                    {imageUrl ? (
                        <Image
                            width={480}
                            height={640}
                            src={imageUrl ?? ''}
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
                <CardFooter display={'flex'} flexDirection={'column'}>
                    <Heading as={'h2'}>{title}</Heading>
                    <div>{description}</div>
                    {showRating !== 0 ? (
                        <strong>Rating: {showRating}</strong>
                    ) : (
                        <strong>No rating</strong>
                    )}
                </CardFooter>
            </Flex>
        </Card>
    );
}
