import { AuthRedirect } from '@/shared/components/AuthRedirect';
import { Container } from '@chakra-ui/react';
import React, { Fragment } from 'react';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Fragment>
            <AuthRedirect to="/shows" condition="loggedIn" />
            <Container bg="darkPrimary" w="100%" h="100%" maxW="100dvw">
                {children}
            </Container>
        </Fragment>
    );
}
