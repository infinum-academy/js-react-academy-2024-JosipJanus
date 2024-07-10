import { ShowsContainer } from '@/components/feature/shows/ShowsContainer';
import styles from './page.module.css';
import { Sidebar } from './sidebar';
import { Box } from '@chakra-ui/react';
import { SideBarContent } from './sidebarcontent';

export default function Home() {
    return (
        <Box as="main" className={styles.main}>
            <Sidebar />
            <SideBarContent />
        </Box>
    );
}
