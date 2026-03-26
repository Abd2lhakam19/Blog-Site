import styles from "./Footer.module.css";

const footerLinks = ["Github", "Discord", "RSS", "Privacy"];

export default function Footer() {
  return (
    <>
      <div className={`${styles.archiveRow} font-display`}>
        <a href="#" className={styles.archiveLink}>
          View all archives
          <span className={styles.arrow}>→</span>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={`${styles.brand} font-sans`}>
          <strong className="font-headline">Neon Monolith</strong>© 2024 Neon
          Monolith. Engineered for depth.
        </div>
        <nav className={styles.links}>
          {footerLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>
      </footer>
    </>
  );
}
