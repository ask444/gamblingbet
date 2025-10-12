import styles from '../styles/header.module.css';

export default function PageHeader() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.brandWrapper}>
          <img src="/images/je-logo.svg" alt="Brand" className={styles.brandLogo} />
        </div>
      </div>
    </header>
  );
}