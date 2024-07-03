import { useState } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import SearchInput from '../searchInput/SearchInput';
import Interests from '../interests/Interests';

const extractSummary = (biography) => {
  const sentences = biography.split('. ');
  const summary = sentences.filter(sentence => 
    sentence.toLowerCase().includes('born') || 
    sentence.toLowerCase().includes('known for') ||
    sentence.toLowerCase().includes('achievement') ||
    sentence.toLowerCase().includes('award') ||
    sentence.toLowerCase().includes('recognition') ||
    sentence.toLowerCase().includes('career') ||
    sentence.toLowerCase().includes('early life') ||
    sentence.toLowerCase().includes('education') ||
    sentence.toLowerCase().includes('personal life') ||
    sentence.toLowerCase().includes('works') ||
    sentence.toLowerCase().includes('books') ||
    sentence.toLowerCase().includes('publications') ||
    sentence.toLowerCase().includes('research') ||
    sentence.toLowerCase().includes('discoveries') ||
    sentence.toLowerCase().includes('contributions')
  );

  return summary.length ? summary.join('. ') + '.' : sentences.slice(0, 8).join('. ') + '.';
};

const About = ({ person, onSearch }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const summary = extractSummary(person.extract);

  return (
    <section className={styles.about}>
      <div className={styles.profileContainer}>
        {person.thumbnail && (
          <Image
            src={person.thumbnail.source}
            alt={person.title}
            width={300}
            height={300} 
            className={`${styles.profileImage} ${imageLoaded ? styles.loaded : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}
      </div>
      <div className={styles.summaryContainer}>
        <h3 className={styles.searchInputTitle}>Try to search more people!</h3>
        <SearchInput onSubmit={onSearch} />
        <h2 className={styles.aboutTitle}>About</h2>
        <h3 className={styles.summary}>{summary}</h3>
        <Interests biography={person.extract} />
      </div>
    </section>
  );
};

export default About;
