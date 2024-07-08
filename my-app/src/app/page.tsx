import ShowDetails from '@/components/feature/shows/ShowDetails';
import styles from './page.module.css';
import { ShowsContainer } from '@/components/feature/shows/ShowsContainer';

export default function Home() {
    return (
        <main className={styles.main}>
            <ShowsContainer />
        </main>
    );
}
