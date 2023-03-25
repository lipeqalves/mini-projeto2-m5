import styles from "./Input.module.css"
export const Input = ({ value, name, type, onChange,required=false }) => {
  return (
    <div className={styles.campo}>
      <label htmlFor={name}>{name}</label>
      <input id={name} value={value} type={type} onChange={onChange} required={required}/>
    </div>
  );
};
