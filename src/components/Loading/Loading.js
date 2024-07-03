import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loaderContainer}  data-testid="loader">
      <div className={styles.loader} ></div>
    </div>
  );
};

export default Loading;
