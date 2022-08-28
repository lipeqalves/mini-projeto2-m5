import { Tabela } from "../../components/tabela/Tabela";
import styles from "./Cliente.module.css";
import { useContext, useState } from "react";
import { CustomerContext } from "../../contexts/customer";

export const Cliente = () => {
  const { nome, sobrenome, email, telefone } = useContext(CustomerContext);
  //console.log("dados: clientes:", { nome, sobrenome, email ,telefone})
  const [showTabela, setShowTabela] = useState(false);
  const showOrHide = (bool) => {
    setShowTabela(bool);
  };

  return (
    <main className={styles.container}>
      <p
        onClick={() => {
          //console.log(showTabela);
          !showTabela ? showOrHide(true) : showOrHide(false);
        }}
      >
        Clientes
      </p>
      {showTabela ? (
        <div className={styles.container}>
          <Tabela
            nome="Filipe"
            sobrenome="Alves"
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
          />
          <Tabela
            nome={nome}
            sobrenome={sobrenome}
            email={email}
            telefone={telefone}
          />
        </div>
      ) : null}
    </main>
  );
};
