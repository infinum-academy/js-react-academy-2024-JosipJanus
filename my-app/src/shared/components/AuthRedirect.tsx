'use client';
import useSWR from 'swr';

import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IAuthRedirectProps {
    to: string;
    condition: 'loggedIn' | 'loggedOut';
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
    const router = useRouter();

    const { data, isLoading } = useSWR(swrKeys.user, fetcher<any>);

    useEffect(() => {
        console.log('Redirect page effect');
        if (isLoading) {
            return;
        }
        if (!data && condition === 'loggedOut') {
            console.log('Not logged in, redirecting to login page');
            router.push(to);
        }

        if (data && condition === 'loggedIn') {
            console.log('Logged in, redirecting to home page');
            router.push(to);
        }
    }, [data, isLoading, router, condition, to]);

    return null;
};
