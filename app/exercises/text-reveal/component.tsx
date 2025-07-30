'use client';

import { useState } from 'react';
import styles from './component.module.css';

export function TextReveal() {
  const [reset, setReset] = useState(0);

  const WORD = 'Animations';

  return (
    <div>
      <div key={reset}>
        <h1 className={styles.h1}>
          {WORD.split('').map((char, index) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: <Not changing>
              key={index}
              style={{ '--index': index } as React.CSSProperties}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
      {/* Use this button to replay your animation */}
      <button
        className={styles.button}
        onClick={() => setReset(reset + 1)}
        type="button"
      >
        Replay animation
      </button>
    </div>
  );
}
