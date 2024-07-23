'use client';

import { ShowPicker } from '@/components/feature/show-picker/ShowPicker';
import { AuthRedirect } from '@/shared/components/AuthRedirect';
import { Fragment } from 'react';

export default function ShowPickerPage() {
    return (
        <Fragment>
            <AuthRedirect to="/login" condition="loggedOut" />
            <ShowPicker />
        </Fragment>
    );
}
