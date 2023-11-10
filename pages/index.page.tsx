import type { NextPage } from 'next'
import styles from './style.module.scss';
import NewsletterSignUpContainer from 'containers/NewsletterSignUpContainer';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <NewsletterSignUpContainer />
                </div>
            </main>
        </>
    );
}

export default Home;
