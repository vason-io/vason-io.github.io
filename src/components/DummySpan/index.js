import React from 'react';
import styles from './styles.module.css';

export default function DummySpan({children, color}) {
    return (
        <span style={{
            color: color,
        }}>
            {children}
        </span>
    );
}