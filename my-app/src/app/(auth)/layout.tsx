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
            <Container bg="darkPrimary">{children}</Container>
        </Fragment>
    );
}
