import React from "react";
import styles from "./styles.module.css";
import Key from "@site/src/components/Key";

export default function EscCloseWindow() {
  return (
    <span>
      To close the child window press the <Key>ESC</Key> key.
    </span>
  );
}
