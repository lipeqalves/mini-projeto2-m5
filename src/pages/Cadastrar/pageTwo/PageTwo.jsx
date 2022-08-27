import { Button } from "../../../components/button/Button";
import styles from "./PageTwo.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Api } from "../../../service/Service";
export const PageTwo = () => {

  return (
    <main className={styles.container}>
      <form action="#" method="post">
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>CEP</label>
              <input type="text"  />
              
            </div>
            <div className={styles.campo}>
              <label>Rua</label>
              <input type="text" />
            </div>
          
          <div className={styles.campo}>
            <label>Numero</label>
            <input type="text" />
          </div>
          <div className={styles.campo}>
            <label>Bairro</label>
            <input type="text" />
          </div>
          
          </fieldset>
          <div className={styles.botao}>
          <Link to="/pageone"><Button label="Voltar"/></Link>
          <Link to="/pagethree"><Button label="Próximo"/></Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
