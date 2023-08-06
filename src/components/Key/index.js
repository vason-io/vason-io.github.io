import React from 'react';
import styles from './styles.module.css';

export default function Key({children}) {
    return (
        <span className={styles.kbd}>{children}</span>
    );
}