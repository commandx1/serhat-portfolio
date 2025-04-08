'use client';

import { useState } from 'react';

import styles from './mobile-menu.module.scss';
import Links from '../links';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(p => !p);

    return (
        <nav className={styles.mobileMenu}>
            <div
                onClick={toggleMenu}
                className={[styles.hamburgerBtn, isOpen && styles.active].filter(Boolean).join(' ')}>
                <div />
            </div>

            <section className={[styles.menuDropdown, isOpen && styles.active].filter(Boolean).join(' ')}>
                <Links column />
            </section>
        </nav>
    );
};

export default MobileMenu;
