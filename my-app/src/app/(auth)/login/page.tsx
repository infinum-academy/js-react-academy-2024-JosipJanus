'use client';

import { LoginForm } from '@/components/feature/login/LoginForm';
import { Container } from '@chakra-ui/react';

export default function LoginPage() {
    return (
        <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
        >
            <LoginForm />
        </Container>
    );
}
