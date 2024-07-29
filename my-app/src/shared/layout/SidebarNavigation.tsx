import { SidebarNavigationDesktop } from './SidebarNavigation.desktop';
import { SidebarNavigationMobile } from './SidebarNavigation.mobile';

export const SidebarNavigation = () => {
    return (
        <>
            <SidebarNavigationMobile />
            <SidebarNavigationDesktop />
        </>
    );
};
