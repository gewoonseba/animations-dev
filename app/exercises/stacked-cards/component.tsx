import React from "react";
import styles from "./component.module.css";

const LENGTH = 3;

export function StackedCardsComponent() {
  return (
    <div className={styles.wrapper}>
      {new Array(LENGTH).fill(0).map((_, i) => (
        <div
          className={styles.card}
          key={i}
          style={{ "--index": LENGTH - 1 - i } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
