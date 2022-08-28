import { Button } from "../../../components/button/Button";
import styles from "./PageTwo.module.css"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CustomerContext } from "../../../contexts/customer";


export const PageTwo = () => {
  const { nome, sobrenome, email, telefone} = useContext(CustomerContext);
  const {submit} = useContext(CustomerContext);

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");

  const handleSubmit = () => {
    console.log("dados pagetwo", { nome, sobrenome, email, telefone, cep, rua, numero, bairro });
    submit({ nome, sobrenome, email, telefone, cep, rua, numero, bairro });
  };

  return (
    <main className={styles.container}>
      <form action="#" method="post">
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>CEP</label>
              <input
                type="text"
                onChange={(e) => {
                  setCep(e.target.value);
                 // console.log(e.target.value)
                }}
              />
              
            </div>
            <div className={styles.campo}>
              <label>Rua</label>
              <input type="text"
                onChange={(e) => {
                  setRua(e.target.value);
                 // console.log(e.target.value)
                }} />
            </div>
          
          <div className={styles.campo}>
            <label>Numero</label>
            <input type="text" onChange={(e) => {
                  setNumero(e.target.value);
                 // console.log(e.target.value)
                }}/>
          </div>
          <div className={styles.campo}>
            <label>Bairro</label>
            <input type="text" onChange={(e) => {
                  setBairro(e.target.value);
                 // console.log(e.target.value)
                }}/>
          </div>
          
          </fieldset>
          <div className={styles.botao}>
          <Link to="/pageone"><Button label="Voltar"/></Link>
          <Link to=""><Button label="Próximo" onClick={handleSubmit}/></Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
