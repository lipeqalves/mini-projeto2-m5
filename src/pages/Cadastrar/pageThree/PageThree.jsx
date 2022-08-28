import { Button } from "../../../components/button/Button";
import styles from "./PageThree.module.css"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CustomerContext } from "../../../contexts/customer";

export const PageThree = () => {

  const { nome, sobrenome, email, telefone, cep, rua, numero, bairro} = useContext(CustomerContext);
  const {submit} = useContext(CustomerContext);

  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [renda, setRenda] = useState("");
  const [profissao, setProfissao] = useState("");

  const handleSubmit = () => {

    //console.log("dados pagetwo", { nome, sobrenome, email, telefone, cep, rua, numero, bairro });
    
    submit({ nome, sobrenome, email, telefone, 
        cep, rua, numero, bairro, 
        dataNascimento, cpf,renda,profissao });
  };

  return (
    <main className={styles.container}>
      <form action="#" method="post">
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>Data Nascimento</label>
              <input type="text" onChange={(e) => {
                  setDataNascimento(e.target.value);
                 // console.log(e.target.value)
                }}/>
            </div>
            <div className={styles.campo}>
              <label>CPF</label>
              <input type="text" onChange={(e) => {
                  setCpf(e.target.value);
                 // console.log(e.target.value)
                }} />
            </div>
          
          <div className={styles.campo}>
            <label>Renda Mensal</label>
            <input type="text" onChange={(e) => {
                  setRenda(e.target.value);
                 // console.log(e.target.value)
                }}/>
          </div>
          <div className={styles.campo}>
            <label>Profissão</label>
            <input type="text" onChange={(e) => {
                  setProfissao(e.target.value);
                 // console.log(e.target.value)
                }}/>
          </div>
          
          </fieldset>
          <div className={styles.botao}>
          <Link to="/pagetwo"><Button label="Voltar"/></Link>
          <Link to="/cliente"><Button label="Salvar" onClick={handleSubmit} /></Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
