import styles from './TextAreaField.module.css';

const TextAreaField = ({ label, error, ...props }) => {
  return (
    <div className={styles.textAreaField}>
      <label htmlFor={props.id} className={styles.label}>{label}</label>
      <textarea {...props} className={styles.textarea}></textarea>
    </div>
  );
};

export default TextAreaField;
