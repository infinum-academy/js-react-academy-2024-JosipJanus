import { Show } from '@chakra-ui/react';
import { Sidebar } from './Sidebar';

export const SidebarNavigationDesktop = () => {
    return (
        <Show above="md">
            <Sidebar />
        </Show>
    );
};
