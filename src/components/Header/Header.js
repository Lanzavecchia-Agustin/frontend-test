import styles from './Header.module.css';
import Image from 'next/image';

const Header = ({ name, profileImage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <h3 className={styles.profileName}>{name}</h3>
        {profileImage && (
          <Image 
            src={profileImage} 
            alt="Profile Image" 
            className={styles.profileImage}
            width={40} 
            height={40} 
            layout="fixed" 
          />
        )}
      </div>
    </header>
  );
};

export default Header;
