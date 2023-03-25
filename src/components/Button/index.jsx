import styles from "./Button.module.css";

export const Button = ({ name, type, onClick}) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>{name} </button>
  );
};
