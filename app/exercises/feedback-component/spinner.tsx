import styles from './component.module.css';

interface SpinnerProps {
  color?: string;
  size?: number;
}

export function Spinner({ color, size = 20 }: SpinnerProps) {
  const bars = new Array(12).fill(0);
  return (
    <div
      className={styles.wrapper}
      style={{
        ['--spinner-size' as unknown as string]: `${size}px`,
        ['--spinner-color' as unknown as string]: color ?? undefined,
      }}
    >
      <div className={styles.spinner}>
        {bars.map((_, index) => (
          <div className={styles.bar} key={`spinner-bar-${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
