import styles from "./Button.module.css"

export const Button = ({label, type, onClick}) => {
    return(
        <button type={type} className={styles.btn} onClick={onClick}
          >{label} </button>
    )
} 