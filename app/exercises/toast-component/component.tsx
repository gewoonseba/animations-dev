'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import styles from './component.module.css';

interface ToastProps {
  index: number;
}

function Toast({ index }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={styles.toast}
      data-mounted={mounted}
      style={{ '--index': index } as React.CSSProperties}
    >
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
          // biome-ignore lint/suspicious/noArrayIndexKey: <orde won't hange>
          <Toast index={toasts - i - 1} key={i} />
        ))}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setToasts(toasts + 1);
        }}
        type="button"
      >
        Add toast
      </button>
    </div>
  );
}
