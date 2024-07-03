import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} 
          <a href="https://www.linkedin.com/in/agustin-lanzavecchia-3755571a8/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Agustin Lanzavecchia
          </a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
