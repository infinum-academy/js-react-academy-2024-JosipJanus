'use client';

import { useRedirect } from '@/hooks/useRedirect';
import { Box } from '@chakra-ui/react';

export default function Home() {
    const isRunning = useRedirect('/shows', true);

    if (isRunning) {
        return <Box color="white">Loading stuff....</Box>;
    }

    return null;
}
