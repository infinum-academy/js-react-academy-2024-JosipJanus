'use client';
// app/providers.tsx
import '@fontsource/roboto/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import theme from '@/styles/theme';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </SWRConfig>
    );
}
