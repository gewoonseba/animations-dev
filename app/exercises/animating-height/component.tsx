"use client";

import { useState } from "react";
import styles from "./component.module.css";

export function AnimatingHeightComponent() {
  const [showExtraContent, setShowExtraContent] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => setShowExtraContent((b) => !b)}
        type="button"
      >
        Toggle height
      </button>
      <div className={styles.element}>
        <div className={styles.inner}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
