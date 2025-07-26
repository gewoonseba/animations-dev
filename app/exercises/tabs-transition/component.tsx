import styles from "./component.module.css";

export function TabsTransitionComponent() {
  return (
    <div className={styles.container}>
      {/* Add your tabs transition component here */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabList}>
          <button className={styles.tab} type="button">
            Tab 1
          </button>
          <button className={styles.tab} type="button">
            Tab 2
          </button>
          <button className={styles.tab} type="button">
            Tab 3
          </button>
        </div>
        <div className={styles.tabContent}>
          <div className={styles.tabPanel}>Content for Tab 1</div>
          <div className={styles.tabPanel}>Content for Tab 2</div>
          <div className={styles.tabPanel}>Content for Tab 3</div>
        </div>
      </div>
    </div>
  );
}
