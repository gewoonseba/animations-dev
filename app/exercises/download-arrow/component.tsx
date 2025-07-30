import styles from './component.module.css';

const ArrowDown = (
  <svg
    fill="none"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Arrow icon</title>
    <path
      d="M18.25 14L12 20.25L5.75 14M12 19.5V3.75"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export function DownloadArrowComponent() {
  return (
    <button
      aria-label="Download PDF"
      className={styles.downloadButton}
      type="button"
    >
      {ArrowDown}
      {ArrowDown}
    </button>
  );
}
