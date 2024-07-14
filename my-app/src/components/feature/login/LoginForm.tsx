'use client';
import { fetcher } from '@/fetchers/fetcher';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { LockIcon } from '@chakra-ui/icons';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    chakra,
    FormControl,
    Input,
    InputGroup,
    Text,
    InputLeftElement,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface ILoginFormInputs {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const router = useRouter();
    const { register, handleSubmit, reset, formState } =
        useForm<ILoginFormInputs>();

    const { mutate } = useSWR(swrKeys.login, fetcher, {
        refreshInterval: 0,
        revalidateOnFocus: false,
        revalidateOnMount: false,
    });

    const { trigger } = useSWRMutation(swrKeys.login, mutator, {
        onSuccess: (data) => {
            mutate(data, { revalidate: false });
            localStorage.setItem('USER_DATA', JSON.stringify(data));
            router.push('/shows');
            reset();
        },
    });

    const onLogin = (data: ILoginFormInputs) => {
        trigger(data);
    };

    return (
        <chakra.form onSubmit={handleSubmit(onLogin)}>
            <Card backgroundColor="#371687" borderRadius="16px">
                <CardBody display="flex" flexDirection="column" gap={6}>
                    <FormControl isRequired={true}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon color="white" />
                            </InputLeftElement>
                            <Input
                                {...register('email')}
                                type="email"
                                color="white"
                                placeholder="Username"
                                borderRadius="24px"
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired={true}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon color="white" />
                            </InputLeftElement>
                            <Input
                                {...register('password')}
                                type="password"
                                color="white"
                                placeholder="Password"
                                borderRadius="24px"
                            />
                        </InputGroup>
                    </FormControl>
                </CardBody>
                <CardFooter
                    display="flex"
                    flexDir="column"
                    justify="center"
                    alignItems="center"
                    gap="8px"
                >
                    <Button type="submit">Login</Button>
                    <Text color={'white'}>
                        Don't have an account?{' '}
                        <Text
                            fontWeight="bold"
                            as={NextLink}
                            href={'/register'}
                        >
                            Register
                        </Text>
                    </Text>
                </CardFooter>
            </Card>
        </chakra.form>
    );
};
