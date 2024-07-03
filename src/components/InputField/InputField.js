import styles from './InputField.module.css';

const InputField = ({ label, error, ...props }) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={props.id} className={styles.label}>{label}</label>
      <input {...props} className={styles.input} />
    </div>
  );
};

export default InputField;
