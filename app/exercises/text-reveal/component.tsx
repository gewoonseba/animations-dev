"use client";

import { useState } from "react";
import styles from "./component.module.css";

export function TextReveal() {
  const [reset, setReset] = useState(0);

  return (
    <div>
      <div key={reset}>
        <h1 className={styles.h1}>Animations</h1>
      </div>
      {/* Use this button to replay your animation */}
      <button className={styles.button} onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  );
}
