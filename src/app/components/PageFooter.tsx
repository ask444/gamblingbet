import styles from '../styles/footer.module.css';

export default function PageFooter() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <ul className={styles.footerLinks}>
          <li><a href="/recommend" className={styles.footerLink}>Recommended a restaurant</a></li>
          <li><a href="/signup" className={styles.footerLink}>Signup a restaurant</a></li>
          <li><a href="/jobs" className={styles.footerLink}>Jobs</a></li>
          <li><a href="/terms" className={styles.footerLink}>Terms of use</a></li>
          <li><a href="/privacy" className={styles.footerLink}>Privacy statement</a></li>
          <li><a href="/colophon" className={styles.footerLink}>Colophon</a></li>
          <li><a href="/cookie" className={styles.footerLink}>Cookie statement</a></li>
          <li><a href="/bugbounty" className={styles.footerLink}>Bug bounty</a></li>
          <li><a href="/news" className={styles.footerLink}>News</a></li>
        </ul>
        <div className={styles.footerCopyright}>
          <span>© {new Date().getFullYear()} Takeaway.com</span>
        </div>
      </div>
    </footer>
  );
}
