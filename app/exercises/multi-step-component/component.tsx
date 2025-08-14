'use client';

import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';
import { Pane } from 'tweakpane';
import styles from './component.module.css';

type Direction = 'forward' | 'backward';

export function MultiStepComponent() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [ref, bounds] = useMeasure();
  const directionRef = useRef<Direction>('forward');

  // Parameters controlled via Tweakpane. Stored in refs to avoid re-renders.
  const paneRef = useRef<Pane | null>(null);
  const paneContainerRef = useRef<HTMLDivElement | null>(null);
  const paramsRef = useRef<{
    duration: number;
    bounce: number;
    animateOpacity: boolean;
  }>({
    duration: 0.7,
    bounce: 0,
    animateOpacity: true,
  });

  useEffect(() => {
    // Create a fixed container in the top-right corner of the page so the pane is always visible
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '16px';
    container.style.right = '16px';
    container.style.zIndex = '9999';
    container.style.pointerEvents = 'auto';
    document.body.appendChild(container);
    paneContainerRef.current = container;

    const pane = new Pane({ container, title: 'Animation Controls' });
    paneRef.current = pane;

    // Local mirror object for Tweakpane bindings
    const bindings = {
      duration: paramsRef.current.duration,
      bounce: paramsRef.current.bounce,
      animateOpacity: paramsRef.current.animateOpacity,
    };

    const durationBinding = pane.addBinding(bindings, 'duration', {
      label: 'duration (s)',
      min: 0,
      max: 3,
      step: 0.01,
      format: (v: number) => v.toFixed(2),
    });
    durationBinding.on('change', (ev: { value: number; last?: boolean }) => {
      paramsRef.current.duration = Number(ev.value);
    });

    const bounceBinding = pane.addBinding(bindings, 'bounce', {
      label: 'bounce',
      min: 0,
      max: 1,
      step: 0.01,
      format: (v: number) => v.toFixed(2),
    });
    bounceBinding.on('change', (ev: { value: number; last?: boolean }) => {
      paramsRef.current.bounce = Number(ev.value);
    });

    const animateOpacityBinding = pane.addBinding(bindings, 'animateOpacity', {
      label: 'animate opacity',
      type: 'boolean',
    });
    animateOpacityBinding.on(
      'change',
      (ev: { value: boolean; last?: boolean }) => {
        paramsRef.current.animateOpacity = Boolean(ev.value);
      }
    );

    return () => {
      try {
        paneRef.current?.dispose();
      } finally {
        paneRef.current = null;
        paneContainerRef.current?.parentNode?.removeChild(
          paneContainerRef.current
        );
        paneContainerRef.current = null;
      }
    };
  }, []);

  const variants = {
    target: {
      x: 0,
      opacity: paramsRef.current.animateOpacity ? 1 : undefined,
    },
    exit: (direction: Direction) => ({
      x: direction === 'forward' ? '-110%' : '110%',
      opacity: paramsRef.current.animateOpacity ? 0 : undefined,
    }),
    initial: (direction: Direction) => ({
      x: direction === 'forward' ? '110%' : '-110%',
      opacity: paramsRef.current.animateOpacity ? 0 : undefined,
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
        duration: paramsRef.current.duration,
        type: 'spring',
        bounce: paramsRef.current.bounce,
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
                if (currentStep === 2) {
                  directionRef.current = 'forward';
                  setCurrentStep(0);
                  return;
                }
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
