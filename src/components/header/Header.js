import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const menuItems = [
        { path: '/', label: 'menu-button-1' },
        { path: '/about', label: 'menu-button-2' },
        { path: '/services', label: 'menu-button-3' },
        { path: '/portfolio', label: 'menu-button-4' },
        { path: '/contact', label: 'menu-button-5' }
    ];
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <a href="/" className={styles.logoLink}>
                        {/* Логотип можно ставить здесь или использовать отдельный компонент */}
                        <span className={styles.logoText}>Telemetry</span>
                    </a>
                </div>
                
                <ul className={styles.menu}>
                    {menuItems.map((item) => (
                        <li key={item.path} className={styles.menuItem}>
                            <a href={item.path} className={styles.menuLink}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
