import styles from './Error.module.css';
import SearchInput from '../searchInput/SearchInput';

const Error = ({ searchTerm, onSearch }) => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops! Something went wrong!</h1>
      <h2>You searched for: <strong>{searchTerm}</strong></h2>
      <h5 className={styles.suggestion}>Please check the spelling and try again.</h5>

      <div className={styles.searchContainer}>
        <SearchInput onSubmit={onSearch} />
      </div>
    </div>
  );
};

export default Error;
