import React from 'react';
import styles from './styles.module.css';

export const Param = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.param}>
    {'<'}
    {children}
    {'>'}
  </span>
);

export const Func = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.func}>{children}</span>
);
