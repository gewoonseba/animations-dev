'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useTweakpane } from '../../../components/use-tweakpane';
import styles from './component.module.css';

export function AnimatingHeightComponent() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();

  // Tweakpane controls for height animation
  const animationParams = useTweakpane(
    {
      heightDuration: 0.3,
      heightEase: 'easeInOut',
      contentDuration: 0.15,
      contentDelay: 0.1,
    },
    {
      title: 'Height Animation',
      controls: [
        {
          key: 'heightDuration',
          label: 'height duration (s)',
          min: 0.1,
          max: 2,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'heightEase',
          label: 'height easing',
          type: 'string',
          options: {
            options: {
              easeInOut: 'easeInOut',
              linear: 'linear',
              easeIn: 'easeIn',
              easeOut: 'easeOut',
            },
          },
        },
        {
          key: 'contentDuration',
          label: 'content duration (s)',
          min: 0.05,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'contentDelay',
          label: 'content delay (s)',
          min: 0,
          max: 0.5,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
      ],
    }
  );

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => setShowExtraContent((b) => !b)}
        type="button"
      >
        Toggle height
      </button>
      <motion.div
        animate={{ height: bounds.height }}
        className={styles.element}
        transition={{
          duration: animationParams.heightDuration,
          ease: animationParams.heightEase,
        }}
      >
        <div className={styles.inner} ref={ref}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          <AnimatePresence mode="popLayout">
            {showExtraContent ? (
              <motion.p
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: animationParams.contentDuration,
                  delay: showExtraContent ? animationParams.contentDelay : 0,
                }}
              >
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
