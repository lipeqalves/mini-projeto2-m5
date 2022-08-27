import { Tabela } from "../../components/tabela/Tabela";
import styles from "./Cliente.module.css";
import { useState } from "react";

export const Cliente = () => {

  const [showTabela, setShowTabela] = useState(false)
  const showOrHide = (bool) => {setShowTabela(bool)}

  return (
    <main className={styles.container}>
    <p onClick={() =>{
      console.log(showTabela)
      !showTabela?showOrHide(true):showOrHide(false)
    }} >Filipe Alves</p>
      {showTabela? <Tabela
        nome="Filipe"
        sobreNome="Alves"
        email="lipeqa@gmail.com"
        telefone="81999999999"
        cep="53530100"
        rua="126"
        numero="197"
        bairro="caetes"
        data="2804197"
        cpf="123456789"
        renda="10000000000"
        prof="dev"
      /> : null}

     
    </main>
  );
};
