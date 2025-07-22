import styles from "./component.module.css";

export function Orbit() {
  return (
    <div>
      <div className={styles.circle} />
      <div className={styles.orbitingCircle} />
    </div>
  );
}
