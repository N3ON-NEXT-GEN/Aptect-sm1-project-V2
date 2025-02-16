import React, { useState } from 'react';
import react from '../assets/react.svg';
import styles from './Header.module.css'; // Import the CSS module

const Header = ({ companyName, width }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img src={react} alt="React Logo" className={styles.logo} />
                <h2 className={styles.companyName}>{companyName}</h2>
            </div>

            {/* Hamburger Icon */}
            <div
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* Navigation List */}
            <div className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Contact</li>
                    <li className={styles.navItem}>Services</li>
                    <li className={styles.navItem}>Products</li>
                    <li className={styles.navItem}>Education</li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;