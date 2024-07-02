
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <img src="/profile.jpg" alt="Profile Image" className={styles.profileImage} /> */}
      <h1>Nombre del Usuario</h1>
    </header>
  );
};

export default Header;
