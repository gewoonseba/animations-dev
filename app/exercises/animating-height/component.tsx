'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';
import styles from './component.module.css';

export function AnimatingHeightComponent() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();

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
