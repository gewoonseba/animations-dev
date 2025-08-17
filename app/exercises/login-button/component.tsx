'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTweakpane } from '@/components/use-tweakpane';
import styles from './component.module.css';

const buttonCopy = {
  idle: 'Send me a login link',
  loading: <Spinner color="rgba(255, 255, 255, 0.65)" size={16} />,
  success: 'Login link sent!',
} as const;

type ButtonState = keyof typeof buttonCopy;

export function LoginButtonComponent() {
  const [buttonState, setButtonState] = useState<ButtonState>('idle');

  // Tweakpane controls for button animation
  const animationParams = useTweakpane(
    {
      visualDuration: 0.3,
      bounce: 0,
      loadingDuration: 1750,
      successDuration: 1750,
      yOffset: 25,
    },
    {
      title: 'Login Button Animation',
      controls: [
        {
          key: 'visualDuration',
          label: 'animation duration (s)',
          min: 0.1,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'bounce',
          label: 'spring bounce',
          min: 0,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'loadingDuration',
          label: 'loading duration (ms)',
          min: 500,
          max: 5000,
          step: 250,
        },
        {
          key: 'successDuration',
          label: 'success duration (ms)',
          min: 500,
          max: 5000,
          step: 250,
        },
        {
          key: 'yOffset',
          label: 'Y movement offset',
          min: 10,
          max: 50,
          step: 5,
        },
      ],
    }
  );

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
          }, animationParams.loadingDuration);

          setTimeout(() => {
            setButtonState('idle');
          }, animationParams.loadingDuration + animationParams.successDuration);
        }}
        type="button"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: animationParams.yOffset, opacity: 0 }}
            initial={{ y: -animationParams.yOffset, opacity: 0 }}
            key={buttonState}
            transition={{
              type: 'spring',
              bounce: animationParams.bounce,
              visualDuration: animationParams.visualDuration,
            }}
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

const bars = Array.from({ length: 12 }, () => 0);

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
