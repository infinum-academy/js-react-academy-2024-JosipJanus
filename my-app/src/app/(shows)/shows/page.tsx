'use client';

import { ShowListSection } from '@/components/feature/shows/ShowListSection';
import { AuthRedirect } from '@/shared/components/AuthRedirect';
import { Fragment } from 'react';

export default function AllShowsPage() {
    return (
        <Fragment>
            <AuthRedirect to="/login" condition="loggedOut" />
            <ShowListSection padding={6} />
        </Fragment>
    );
}
