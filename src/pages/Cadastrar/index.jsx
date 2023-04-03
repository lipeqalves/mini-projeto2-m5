import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import React, { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import "./style.jsx";
import { ContainStyled, FormStyled, BtnStyled } from "./style.jsx";

export const Cadastro = () => {
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cpf: "",
    salario: "",
    cargo: "",
  });
  const handleInputChange = (fild) => {
    return (e) => {
      setUser((prev) => ({
        ...prev,
        [fild]: e.target.value,
      }));
    };
  };
  const { handleInformacao } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInformacao({
      ...user,
    });
  };
  return (
    <ContainStyled>
      <FormStyled>
        <h3>Cadastro de Funcionário</h3>
        <form action="">
          <span>
            <Input
              required
              type="text"
              name="nome"
              value={user.nome}
              onChange={handleInputChange("nome")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="sobrenome"
              value={user.sobrenome}
              onChange={handleInputChange("sobrenome")}
            />
          </span>
          <span>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange("email")}
            />
          </span>
          <span>
            <Input
              type="tel"
              name="telefone"
              value={user.telefone}
              onChange={handleInputChange("telefone")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="cep"
              value={user.cep}
              onChange={handleInputChange("cep")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="rua"
              value={user.rua}
              onChange={handleInputChange("rua")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="numero"
              value={user.numero}
              onChange={handleInputChange("numero")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="bairro"
              value={user.bairro}
              onChange={handleInputChange("bairro")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="Data Nascimento"
              value={user.dataNascimento}
              onChange={handleInputChange("dataNascimento")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="cpf"
              value={user.cpf}
              onChange={handleInputChange("cpf")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="Salario Mensal"
              value={user.salario}
              onChange={handleInputChange("salario")}
            />
          </span>
          <span>
            <Input
              type="text"
              name="cargo"
              value={user.cargo}
              onChange={handleInputChange("cargo")}
            />
          </span>
          <BtnStyled>
            <Button name={"salvar"} onClick={handleSubmit} type="submit" />
          </BtnStyled>
        </form>
      </FormStyled>
    </ContainStyled>
  );
};
