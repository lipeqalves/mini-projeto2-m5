import styles from "./Header.module.css"
import { Button } from "../button/Button";
import { Link } from "react-router-dom";




export const Header = () => {

  return (
    <header className={styles.header}>
    <Link to="/" style={{ textDecoration: 'none' }}><h1 className={styles.home} >HOME</h1></Link>
    <div className={styles.action}>
    <Link to='/pageone'><Button label="Cadastrar"/></Link>
    <Link to="/cliente"><Button label="Cliente"/></Link>
    </div>
      
    </header>
  );
};
