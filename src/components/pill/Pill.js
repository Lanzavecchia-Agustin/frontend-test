import styles from './Pill.module.css';

const Pill = ({ interest, emoji }) => {
  return (
    <div className={styles.pill}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.interest}>{interest}</span>
    </div>
  );
};

export default Pill;
