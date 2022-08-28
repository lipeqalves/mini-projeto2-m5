import { Button } from "../../components/button/Button";
import styles from "./PageOne.module.css";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";

export const PageOne = () => {
const {submit} = useContext(CustomerContext);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = () => {
    console.log("dados pageone", { nome, sobrenome, email, telefone });
    submit({ nome, sobrenome, email, telefone});
  };

  return (
    <main className={styles.container}>
      <form  >
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>Nome</label>
              <input
                type="text"
                onChange={(e) => {
                  setNome(e.target.value);
                 // console.log(e.target.value)
                }}
              />
            </div>
            <div className={styles.campo}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                sobrenome="sobrenome"
                id="sobrenome"
                value={sobrenome}
                onChange={(e) => {
                  setSobrenome(e.target.value);
                  // console.log(e.target.value)
                }}
              />
            </div>

            <div className={styles.campo}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                email="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  //console.log(e.target.value)
                }}
              />
            </div>
            <div className={styles.campo}>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                telefone="telefone"
                id="telefone"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                  // console.log(e.target.value)
                }}
              />
            </div>
          </fieldset>
          <div className={styles.botao}>
            <Link to="/pagetwo" >
              <Button onClick={handleSubmit} label ="Próximo"/>
            </Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
