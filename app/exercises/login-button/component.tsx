'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import styles from './component.module.css';

const buttonCopy = {
  idle: 'Send me a login link',
  loading: <Spinner color="rgba(255, 255, 255, 0.65)" size={16} />,
  success: 'Login link sent!',
} as const;

type ButtonState = keyof typeof buttonCopy;

export function LoginButtonComponent() {
  const [buttonState, setButtonState] = useState<ButtonState>('idle');

  return (
    <div className={styles.outerWrapper}>
      <button
        className={styles.blueButton}
        disabled={buttonState !== 'idle'}
        onClick={() => {
          // This code is just a placeholder
          setButtonState('loading');

          setTimeout(() => {
            setButtonState('success');
          }, 1750);

          setTimeout(() => {
            setButtonState('idle');
          }, 3500);
        }}
        type="button"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            initial={{ y: -25, opacity: 0 }}
            key={buttonState}
            transition={{ type: 'spring', bounce: 0, visualDuration: 0.3 }}
          >
            {buttonCopy[buttonState]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}

interface SpinnerProps {
  color: string;
  size?: number;
}

const bars = new Array(12).fill(0);

function Spinner({ color, size = 20 }: SpinnerProps) {
  return (
    <div
      className={styles.wrapper}
      style={{
        ['--spinner-size' as string]: `${size}px`,
        ['--spinner-color' as string]: color,
      }}
    >
      <div className={styles.spinner}>
        {bars.map((_, i) => (
          <div className={styles.bar} key={`spinner-bar-${String(i)}`} />
        ))}
      </div>
    </div>
  );
}
