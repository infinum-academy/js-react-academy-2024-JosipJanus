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

interface IRegisterFormInputs {
    email: string;
    password: string;
    password_confirmation: string;
}

export const RegisterForm = () => {
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm<IRegisterFormInputs>();

    // ASK: Is this the correct way to prevent useSwr hook from creating requests while the user is idle ?
    const { trigger } = useSWRMutation(swrKeys.register, mutator, {
        onSuccess: (data) => {
            mutate(swrKeys.user, data, { revalidate: false });
            reset();
        },
    });

    const onRegister = (data: IRegisterFormInputs) => {
        trigger(data);
    };

    return (
        <chakra.form onSubmit={handleSubmit(onRegister)}>
            <Card backgroundColor="#371687" borderRadius="16px">
                <CardBody display="flex" flexDirection="column" gap={6}>
                    <FormControl isInvalid={Boolean(errors.email)}>
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
                        <FormErrorMessage>"email is required"</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={Boolean(errors.password)}>
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

                    <FormControl
                        isInvalid={Boolean(errors.password_confirmation)}
                    >
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
