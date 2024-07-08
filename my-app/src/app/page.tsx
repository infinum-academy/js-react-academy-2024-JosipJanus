import { ShowsContainer } from '@/components/feature/shows/ShowsContainer';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <ShowsContainer className="shows-container" />
        </main>
    );
}
