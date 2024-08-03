'use client';

import { PickerContextProvider } from '@/components/feature/show-picker/components/PickerContextProvider';
import { ShowPicker } from '@/components/feature/show-picker/ShowPicker';
import { AuthRedirect } from '@/shared/components/AuthRedirect';
import { Fragment } from 'react';

export default function ShowPickerPage() {
    return (
        <PickerContextProvider>
            <AuthRedirect to="/login" condition="loggedOut" />
            <ShowPicker />
        </PickerContextProvider>
    );
}
