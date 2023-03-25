import { Tabela } from "../../components/Tabela";
import styles from "./Colaboradores.module.css";
import { useEffect, useState } from "react";

import { Api } from "../../service/Api";
export const Colaboradores = () => {
  const [colaboradores, setColaboradores] = useState({});
  const [showTabela, setShowTabela] = useState(false);
  const showOrHide = (bool) => {
    setShowTabela(bool);
  };

  useEffect(() => {
    Api.get("/colaboradores").then((res) => {
      setColaboradores(res.data);
    });
  }, []);
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
