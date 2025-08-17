'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useTweakpane } from '../../../components/use-tweakpane';
import styles from './component.module.css';
import { Spinner } from './spinner';

type FormState = 'idle' | 'loading' | 'success';


export function FeedbackComponent() {
  const [open, setOpen] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setOpen(false));

  // Tweakpane controls for feedback popover animations
  const animationParams = useTweakpane(
    {
      popoverDuration: 0.6,
      popoverBounce: 0,
      buttonTransitionDuration: 0.3,
      buttonTransitionBounce: 0,
      loadingDuration: 1500,
      successDelay: 1800,
    },
    {
      title: 'Feedback Animation',
      controls: [
        {
          key: 'popoverDuration',
          label: 'popover duration (s)',
          min: 0.2,
          max: 2,
          step: 0.1,
          format: (v: number) => v.toFixed(1),
        },
        {
          key: 'popoverBounce',
          label: 'popover bounce',
          min: 0,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'buttonTransitionDuration',
          label: 'button transition (s)',
          min: 0.1,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'buttonTransitionBounce',
          label: 'button bounce',
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
          key: 'successDelay',
          label: 'success delay (ms)',
          min: 500,
          max: 5000,
          step: 250,
        },
      ],
    }
  );

  const submit = useCallback(() => {
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, animationParams.loadingDuration);

    setTimeout(() => {
      setOpen(false);
    }, animationParams.loadingDuration + animationParams.successDelay);
  }, [animationParams.loadingDuration, animationParams.successDelay]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === 'Enter' &&
        open &&
        formState === 'idle'
      ) {
        submit();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, formState, submit]);

  return (
    <div className={styles.feedbackWrapper}>
      <motion.button
        className={styles.feedbackButton}
        layoutId="feedback-popover"
        onClick={() => {
          setOpen(true);
          setFormState('idle');
          setFeedback('');
        }}
        style={{ borderRadius: 8 }}
        transition={{
          type: 'spring',
          duration: animationParams.popoverDuration,
          bounce: animationParams.popoverBounce,
        }}
        type="button"
      >
        <motion.span layoutId="feedback-label">Feedback</motion.span>
      </motion.button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className={styles.feedbackPopover}
            layoutId="feedback-popover"
            ref={ref}
            style={{ borderRadius: 12 }}
            transition={{
          type: 'spring',
          duration: animationParams.popoverDuration,
          bounce: animationParams.popoverBounce,
        }}
          >
            <motion.span
              aria-hidden
              className={styles.placeholder}
              data-feedback={feedback ? 'true' : 'false'}
              layoutId="feedback-label"
            >
              Feedback
            </motion.span>
            <AnimatePresence mode="popLayout">
              {formState === 'success' ? (
                <motion.div
                  animate={{ y: 0, filter: 'blur(0px)' }}
                  className={styles.successWrapper}
                  initial={{ y: -32, filter: 'blur(4px)' }}
                  key="success"
                  transition={{
          type: 'spring',
          duration: animationParams.popoverDuration,
          bounce: animationParams.popoverBounce,
        }}
                >
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Success</title>
                    <path
                      d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      fill="#2090FF"
                      fillOpacity="0.16"
                    />
                    <path
                      d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      stroke="#2090FF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                  <h3>Feedback received!</h3>
                  <p>Thanks for helping me improve Sonner.</p>
                </motion.div>
              ) : (
                <motion.form
                  className={styles.feedbackForm}
                  exit={{ y: 32, opacity: 0, filter: 'blur(4px)' }}
                  key="form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!feedback) {
                      return;
                    }
                    submit();
                  }}
                  transition={{
          type: 'spring',
          duration: animationParams.popoverDuration,
          bounce: animationParams.popoverBounce,
        }}
                >
                  <textarea
                    autoFocus
                    className={styles.textarea}
                    onChange={(event) => setFeedback(event.target.value)}
                    placeholder="Feedback"
                    required
                  />
                  <div className={styles.feedbackFooter}>
                    <Divider />
                    <button className={styles.submitButton} type="submit">
                      <AnimatePresence initial={false} mode="popLayout">
                        <motion.span
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          initial={{ opacity: 0, y: -25 }}
                          key={formState}
                          transition={{
                            type: 'spring',
                            duration: animationParams.buttonTransitionDuration,
                            bounce: animationParams.buttonTransitionBounce,
                          }}
                        >
                          {formState === 'loading' ? (
                            <Spinner
                              color="rgba(255, 255, 255, 0.65)"
                              size={14}
                            />
                          ) : (
                            <span>Send feedback</span>
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Divider() {
  return (
    <>
      <svg
        className={styles.dottedLine}
        fill="none"
        height="2"
        viewBox="0 0 352 2"
        width="352"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Horizontal dotted line</title>
        <path d="M0 1H352" stroke="#E6E7E8" strokeDasharray="4 4" />
      </svg>
      <div className={styles.halfCircleLeft}>
        <svg
          fill="none"
          height="12"
          viewBox="0 0 6 12"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Perforation cap</title>
          <g clipPath="url(#clip0_2029_22)">
            <path
              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
              fill="#F5F6F7"
            />
            <path
              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
              stroke="#E6E7E8"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </g>
          <defs>
            <clipPath id="clip0_2029_22">
              <rect fill="white" height="12" width="6" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.halfCircleRight}>
        <svg
          fill="none"
          height="12"
          viewBox="0 0 6 12"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Perforation cap</title>
          <g clipPath="url(#clip0_2029_22)">
            <path
              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
              fill="#F5F6F7"
            />
            <path
              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
              stroke="#E6E7E8"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </g>
          <defs>
            <clipPath id="clip0_2029_22">
              <rect fill="white" height="12" width="6" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}
