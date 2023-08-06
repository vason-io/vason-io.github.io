import React from 'react';
import styles from './styles.module.css';

export default function ActivePanelSign() {
    return (
        <div style={{margin: '20pt 0', padding: '5pt', backgroundColor: '#eee'}}>
            This icon shows which JSON (from the left panel or from the right panel) is being analyzed
            <div className={styles.container}>
                <div className={styles.titlebarParentLeft} style={{backgroundColor: '#555'}}></div>
                <div className={styles.titlebarParentRight} style={{backgroundColor: '#999'}}></div>
                - left JSON is active
            </div>
            <div className={styles.container}>
                <div className={styles.titlebarParentLeft} style={{backgroundColor: '#999'}}></div>
                <div className={styles.titlebarParentRight} style={{backgroundColor: '#555'}}></div>
                - right JSON is active
            </div>
        </div>
    );
}