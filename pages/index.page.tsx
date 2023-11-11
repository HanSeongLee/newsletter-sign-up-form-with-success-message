import type { NextPage } from 'next'
import styles from './style.module.scss';
import NewsletterSignUpContainer from 'containers/NewsletterSignUpContainer';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {process.env.NEXT_PUBLIC_TITLE}
                </h1>
                <div className={styles.container}>
                    <NewsletterSignUpContainer />
                </div>
            </main>
        </>
    );
}

export default Home;
