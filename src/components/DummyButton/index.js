import React from "react";
import styles from "./styles.module.css";

export default function DummyButton({ children }) {
  return <span className={styles.dummyButton}>{children}</span>;
}
