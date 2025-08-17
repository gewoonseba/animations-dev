'use client';

import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { useMemo, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { useTweakpane } from '@/components/use-tweakpane';
import styles from './component.module.css';

type Direction = 'forward' | 'backward';

export function MultiStepComponent() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [ref, bounds] = useMeasure();
  const directionRef = useRef<Direction>('forward');

  // Use the reusable tweakpane hook
  const animationParams = useTweakpane(
    {
      duration: 0.7,
      bounce: 0,
      animateOpacity: true,
    },
    {
      title: 'Multi-Step Animation',
      controls: [
        {
          key: 'duration',
          label: 'duration (s)',
          min: 0,
          max: 3,
          step: 0.01,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'bounce',
          label: 'bounce',
          min: 0,
          max: 1,
          step: 0.01,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'animateOpacity',
          label: 'animate opacity',
          type: 'boolean',
        },
      ],
    }
  );

  const variants = {
    target: {
      x: 0,
      opacity: animationParams.animateOpacity ? 1 : undefined,
    },
    exit: (direction: Direction) => ({
      x: direction === 'forward' ? '-110%' : '110%',
      opacity: animationParams.animateOpacity ? 0 : undefined,
    }),
    initial: (direction: Direction) => ({
      x: direction === 'forward' ? '110%' : '-110%',
      opacity: animationParams.animateOpacity ? 0 : undefined,
    }),
  };

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className={styles.heading}>This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className={styles.heading}>This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className={styles.heading}>This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className={styles.skeletons}>
              <div className={styles.skeleton} style={{ width: 256 }} />
              <div className={styles.skeleton} style={{ width: 192 }} />
              <div className={styles.skeleton} style={{ width: 128 }} />
              <div className={styles.skeleton} style={{ width: 224 }} />
              <div className={styles.skeleton} style={{ width: 384 }} />
            </div>
          </>
        );
      default:
        return null;
    }
  }, [currentStep]);

  return (
    <MotionConfig
      transition={{
        duration: animationParams.duration,
        type: 'spring',
        bounce: animationParams.bounce,
      }}
    >
      <motion.div
        animate={{ height: bounds.height }}
        className={styles.multiStepWrapper}
      >
        <div className={styles.multiStepInner} ref={ref}>
          <AnimatePresence
            custom={directionRef.current}
            initial={false}
            mode="popLayout"
          >
            <motion.div
              animate="target"
              custom={directionRef.current}
              exit="exit"
              initial="initial"
              key={currentStep}
              variants={variants}
            >
              {content}
            </motion.div>
          </AnimatePresence>
          <motion.div className={styles.actions} layout>
            <button
              className={styles.secondaryButton}
              disabled={currentStep === 0}
              onClick={() => {
                if (currentStep === 0) {
                  return;
                }
                directionRef.current = 'backward';
                setCurrentStep((prev) => prev - 1);
              }}
              type="button"
            >
              Back
            </button>
            <button
              className={styles.primaryButton}
              disabled={currentStep === 2}
              onClick={() => {
                directionRef.current = 'forward';
                setCurrentStep((prev) => prev + 1);
              }}
              type="button"
            >
              Continue
            </button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
