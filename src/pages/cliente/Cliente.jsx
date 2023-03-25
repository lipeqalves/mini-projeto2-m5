import { Tabela } from "../../components/tabela/Tabela";
import styles from "./Cliente.module.css";
import { useContext, useState } from "react";
import { CustomerContext } from "../../contexts/customer";

export const Cliente = () => {
  const {informacaoCadastro} = useContext(CustomerContext);

  const [showTabela, setShowTabela] = useState(false);
  const showOrHide = (bool) => {
    setShowTabela(bool);
  };

  return (
    <main className={styles.container}>
      <h1
        onClick={() => {
          !showTabela ? showOrHide(true) : showOrHide(false);
        }}
      >
      Clientes
      </h1>
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
            dataNascimento="2804197"
            cpf="123456789"
            renda="10000000000"
            profissao="dev"
          />
          <Tabela
            nome={informacaoCadastro.nome}
            sobrenome={informacaoCadastro.sobrenome}
            email={informacaoCadastro.email}
            telefone={informacaoCadastro.telefone}
            cep={informacaoCadastro.cep}
            rua={informacaoCadastro.rua}
            numero={informacaoCadastro.numero}
            bairro={informacaoCadastro.bairro}
            dataNascimento={informacaoCadastro.dataNascimento}
            cpf={informacaoCadastro.cpf}
            renda={informacaoCadastro.renda}
            profissao={informacaoCadastro.profissao}
          />
        </div>
      ) : null}
    </main>
  );
};
