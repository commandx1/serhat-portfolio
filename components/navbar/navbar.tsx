import { Container } from '@mui/material';

import Logo from '../logo';
import Links from './links';
import MobileMenu from './mobile-menu';
import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
                <nav className={styles.nav}>
                    <Links column={false} />
                </nav>
                <MobileMenu />
            </Container>
        </header>
    );
};

export default Navbar;
