import { Button } from "../../../components/button/Button";
import styles from "./PageThree.module.css"
import { Link } from "react-router-dom";

export const PageThree = () => {
  return (
    <main className={styles.container}>
      <form action="#" method="post">
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>Data Nascimento</label>
              <input type="text" />
            </div>
            <div className={styles.campo}>
              <label>CPF</label>
              <input type="text" />
            </div>
          
          <div className={styles.campo}>
            <label>Renda Mensal</label>
            <input type="text" />
          </div>
          <div className={styles.campo}>
            <label>Profissão</label>
            <input type="text" />
          </div>
          
          </fieldset>
          <div className={styles.botao}>
          <Link to="/pagetwo"><Button label="Voltar"/></Link>
          <Link to="/"><Button label="Salvar"/></Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
