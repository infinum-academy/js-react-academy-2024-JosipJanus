'use client';

import { RegisterForm } from '@/components/feature/register/RegisterForm';
import { Container } from '@chakra-ui/react';

export default function RegisterPage() {
    return (
        <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
        >
            <RegisterForm />
        </Container>
    );
}
