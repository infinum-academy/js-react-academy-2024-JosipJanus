import { LockIcon } from '@chakra-ui/icons';
import {
    InputGroup,
    Input,
    InputRightElement,
    Button,
    InputLeftElement,
    InputProps,
    IconButton,
    forwardRef,
} from '@chakra-ui/react';
import React from 'react';

interface IPasswordInputProps extends InputProps {
    placeholder: string;
}

export const PasswordInput = forwardRef(
    ({ placeholder, ...rest }: IPasswordInputProps, ref) => {
        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);

        return (
            <InputGroup>
                <Input
                    ref={ref}
                    color="white"
                    type={show ? 'text' : 'password'}
                    placeholder={placeholder}
                    {...rest}
                    borderRadius="24px"
                />
                <InputLeftElement>
                    <LockIcon
                        as="button"
                        color="white"
                        onClick={handleClick}
                        cursor="pointer"
                    />
                </InputLeftElement>
            </InputGroup>
        );
    }
);
