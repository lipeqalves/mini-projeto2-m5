import styles from "./Header.module.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className={styles.home}>HOME</h1>
      </Link>
      <div className={styles.action}>
        <Link to="/cadastro">
          <Button name="Cadastrar" />
        </Link>
        <Link to="/colaboradores">
          <Button name="Colaboradores" />
        </Link>
      </div>
    </header>
  );
};
