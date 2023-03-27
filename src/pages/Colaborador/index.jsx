
import { useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import styles from "./style.module.css"
export const Colaborador = () => {
    const {colaborador} = useContext(CustomerContext)
    console.log("no colaborador",colaborador)
    return (
    <>
      <div className={styles.contain}>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <h3>Our contacts</h3>

            <ul>
              <li>{colaborador.nome}</li>
              <li>{colaborador.email}</li>
              <li>{colaborador.cargo}</li>
            </ul>
          </div>

          <div className={styles.form}>
            <h3>Send us a message</h3>
            <form action="">
              <p>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder={colaborador.nome}/>
              </p>
              <p>
                <label htmlFor="">sobrenome</label>
                <input type="text"placeholder={colaborador.sobrenome} />
              </p>
              <p>
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder={colaborador.email}/>
              </p>
              <p>
                <label htmlFor="">Função</label>
                <input type="text"placeholder={colaborador.cargo} />
              </p>
              <p className={styles.full_width}>
                <label htmlFor="">Observação</label>
                <textarea name="" id="" cols="30" rows="7"></textarea>
              </p>
              <p className={styles.full_width}>
                <button>Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
