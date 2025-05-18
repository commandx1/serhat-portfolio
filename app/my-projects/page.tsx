import { useTranslations } from 'next-intl';

import styles from './style.module.scss';

const MyProjects = () => {
    const t = useTranslations('MyProject');
    return (
        <main className={styles.container}>
            <h1>{t('Title')}</h1>
            <p>{t('Summary')}</p>
        </main>
    );
};

export default MyProjects;
