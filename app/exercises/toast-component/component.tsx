"use client";

import React, { useState, useEffect } from "react";
import styles from "./component.module.css";

interface ToastProps {
  index: number;
}

function Toast({ index }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.toast} style={{ "--index": index } as React.CSSProperties} data-mounted={mounted}>
      <span className={styles.title}>Event Created</span>
      <span className={styles.description}>Monday, January 3rd at 6:00pm</span>
    </div>
  );
}

export function ToastComponentComponent() {
  const [toasts, setToasts] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toaster}>
        {Array.from({ length: toasts }).map((_, i) => (
          <Toast key={i} index={toasts - i - 1} />
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setToasts(toasts + 1);
        }}
      >
        Add toast
      </button>
    </div>
  );
}