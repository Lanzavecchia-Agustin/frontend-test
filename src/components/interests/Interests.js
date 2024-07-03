import { interestEmojis, keywordInterests } from '@/constants/interests.constants';
import styles from './Interests.module.css';
import Pill from '../pill/Pill';

const extractInterests = (biography) => {
  const interests = new Set();
  const bioLower = biography.toLowerCase();
  
  keywordInterests.forEach((keyword) => {
    if (bioLower.includes(keyword)) {
      interests.add(keyword.charAt(0).toUpperCase() + keyword.slice(1));
    }
  });

  return Array.from(interests);
};

const Interests = ({ biography }) => {
  const interests = extractInterests(biography);

  return (
    <section className={styles.interests}>
      <h2>Interests</h2>
      {interests.length > 0 ? (
        <ul className={styles.interestList}>
          {interests.map((interest, index) => (
            <li key={index}>
              <Pill interest={interest} emoji={interestEmojis[interest.toLowerCase().replace(/ /g, '_')]} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No specific interests found in the biography.</p>
      )}
    </section>
  );
};

export default Interests;
