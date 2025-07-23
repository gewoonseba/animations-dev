import styles from './component.module.css';

export function Orbit() {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.orbitingCircle} />
    </div>
  );
}
