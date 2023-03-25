import { Tabela } from "../../components/Tabela";
import styles from "./Colaboradores.module.css";
import {  useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";

export const Colaboradores = () => {

  const [showTabela, setShowTabela] = useState(false);
  const showOrHide = (bool) => {
    setShowTabela(bool);
  };
  const { colaboradores } = useContext(CustomerContext);
  return (
    <main className={styles.container}>
      <h1
        onClick={() => {
          !showTabela ? showOrHide(true) : showOrHide(false);
        }}
      >
        Colaboradores
      </h1>
      {showTabela ? (
        <div className={styles.container}>
          {colaboradores.map((colaborador) => (
            <Tabela
              key={colaborador.id}
              nome={colaborador.nome}
              sobrenome={colaborador.sobrenome}
              email={colaborador.email}
              telefone={colaborador.telefone}
              cep={colaborador.cep}
              rua={colaborador.rua}
              numero={colaborador.numero}
              bairro={colaborador.bairro}
              dataNascimento={colaborador.dataNascimento}
              cpf={colaborador.cpf}
              salario={colaborador.salario}
              cargo={colaborador.cargo}
            />
          ))}
        </div>
      ) : null}
    </main>
  );
};
