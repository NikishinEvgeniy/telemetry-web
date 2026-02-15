import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const menuItems = [
        { path: '/list', label: 'Список устройств' },
        { path: '/addition', label: 'Добавить устройство' },
        { path: '/services', label: 'menu-button-3' },
        { path: '/portfolio', label: 'menu-button-4' },
        { path: '/contact', label: 'menu-button-5' }
    ];
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.logoLink}>
                        <span className={styles.logoText}>Telemetry</span>
                    </Link>
                </div>
                
                <ul className={styles.menu}>
                    {menuItems.map((item) => (
                        <li key={item.path} className={styles.menuItem}>
                            <Link to={item.path} className={styles.menuLink}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
