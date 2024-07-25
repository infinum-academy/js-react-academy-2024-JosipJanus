'use client';
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
    FormErrorMessage,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { PasswordInput } from './components/PasswordInput';

interface ILoginFormInputs {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<ILoginFormInputs>();

    const { trigger } = useSWRMutation(swrKeys.login, mutator, {
        onSuccess: (data) => {
            mutate(swrKeys.user, data, { revalidate: false });
        },
    });

    const onLogin = (data: ILoginFormInputs) => {
        trigger(data);
    };

    return (
        <chakra.form onSubmit={handleSubmit(onLogin)}>
            <Card backgroundColor="#371687" borderRadius="16px">
                <CardBody display="flex" flexDirection="column" gap={6}>
                    <FormControl isRequired={true} isDisabled={isSubmitting}>
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
                        {errors.email && (
                            <FormErrorMessage color="white">
                                Email is required!
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired={true} isDisabled={isSubmitting}>
                        <PasswordInput
                            placeholder="Kastom lozinka placeholder"
                            {...register('password')}
                        ></PasswordInput>
                    </FormControl>
                </CardBody>
                <CardFooter
                    display="flex"
                    flexDir="column"
                    justify="center"
                    alignItems="center"
                    gap="8px"
                >
                    <Button
                        isLoading={isSubmitting}
                        loadingText="Logging in..."
                        type="submit"
                    >
                        Login
                    </Button>
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
