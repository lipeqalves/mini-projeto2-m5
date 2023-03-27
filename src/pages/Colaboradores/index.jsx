import { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { CardColaborador } from "../../components/CardColaborador";
import { Container } from "./style";

export const Colaboradores = () => {
  const { colaboradores } = useContext(CustomerContext);
  return (
    <Container>
      <h3>Lista de Colaboradores</h3>
      {colaboradores.map((colaborador) => (
        <CardColaborador
          key={colaborador.id}
          id={colaborador.id}
          nome={colaborador.nome}
          sobrenome={colaborador.sobrenome}
          cargo={colaborador.cargo}
        />
      ))}
    </Container>
  );
};
