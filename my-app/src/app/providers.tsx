'use client';
// app/providers.tsx
import '@fontsource/roboto/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import theme from '@/styles/theme';
import { PickerContextProvider } from '@/components/feature/show-picker/components/PickerContextProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig>
            <ChakraProvider theme={theme}>
                <PickerContextProvider>{children}</PickerContextProvider>
            </ChakraProvider>
        </SWRConfig>
    );
}
