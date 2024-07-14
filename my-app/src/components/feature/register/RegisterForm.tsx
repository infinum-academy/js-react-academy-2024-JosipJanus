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
    FormErrorMessage,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface IRegisterFormInputs {
    email: string;
    password: string;
    password_confirmation: string;
}

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        watch,
        reset,
        handleSubmit,
    } = useForm<IRegisterFormInputs>();

    const { mutate } = useSWR(swrKeys.register, fetcher, {
        revalidateOnFocus: true,
        revalidateOnMount: false,
    });

    // ASK: Is this the correct way to prevent useSwr hook from creating requests while the user is idle ?
    const { trigger } = useSWRMutation(swrKeys.register, mutator, {
        onSuccess: (data) => {
            mutate(data, { revalidate: false });
            reset();
        },
    });

    console.log('watch email', watch('email'));
    console.log('watch password', watch('password'));

    const onRegister = (data: IRegisterFormInputs) => {
        trigger(data);
    };

    return (
        <chakra.form onSubmit={handleSubmit(onRegister)}>
            <Card backgroundColor="#371687" borderRadius="16px">
                <CardBody display="flex" flexDirection="column" gap={6}>
                    {/* TODO How to show error message here. Probably using state */}
                    {/* ASK: Can I query form state object here */}
                    <FormControl isRequired={true}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon color="white" />
                            </InputLeftElement>
                            <Input
                                {...register('email', { required: true })}
                                type="text"
                                color="white"
                                placeholder="email"
                                borderRadius="24px"
                            />
                        </InputGroup>
                        {errors.password && (
                            <FormErrorMessage>
                                "email is required"
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired={true}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon color="white" />
                            </InputLeftElement>
                            <Input
                                {...register('password', { required: true })}
                                type="password"
                                color="white"
                                placeholder="Password"
                                borderRadius="24px"
                            />
                        </InputGroup>
                        {errors.password && (
                            <FormErrorMessage>
                                "Password is required"
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isRequired={true}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon color="white" />
                            </InputLeftElement>
                            <Input
                                {...register('password_confirmation', {
                                    required: true,
                                })}
                                type="password"
                                color="white"
                                placeholder="Password"
                                borderRadius="24px"
                            />
                        </InputGroup>
                        {errors.password && (
                            <FormErrorMessage>
                                "Password confirmation is required"
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </CardBody>
                <CardFooter
                    display="flex"
                    flexDir="column"
                    justify="center"
                    alignItems="center"
                    gap="8px"
                >
                    <Button type="submit">Sign up</Button>
                    <Text color={'white'}>
                        Don't have an account?
                        <Text fontWeight="bold" as={NextLink} href={'/login'}>
                            Login
                        </Text>
                    </Text>
                </CardFooter>
            </Card>
        </chakra.form>
    );
};
