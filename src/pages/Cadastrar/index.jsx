
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import React, { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import "./style.jsx";
import { ContainStyled, FormStyled, BtnStyled } from "./style.jsx";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("");

  const { handleInformacao } = useContext(CustomerContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleInformacao({
      nome,
      sobrenome,
      email,
      telefone,
      dataNascimento,
      cep,
      rua,
      numero,
      bairro,
      cpf,
      salario,
      cargo,
    });
    setNome("");
    setSobrenome("");
    setEmail("");
    setTelefone("");
    setCep("");
    setRua("");
    setRua("");
    setNumero("");
    setBairro("");
    setDataNascimento("");
    setCpf("");
    setSalario("");
    setCargo("");
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
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="sobrenome"
          value={sobrenome}
          onChange={(e) => {
            setSobrenome(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="tel"
          name="telefone"
          value={telefone}
          onChange={(e) => {
            setTelefone(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="cep"
          value={cep}
          onChange={(e) => {
            setCep(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="rua"
          value={rua}
          onChange={(e) => {
            setRua(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="numero"
          value={numero}
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="bairro"
          value={bairro}
          onChange={(e) => {
            setBairro(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="Data Nascimento"
          value={dataNascimento}
          onChange={(e) => {
            setDataNascimento(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="Salario Mensal"
          value={salario}
          onChange={(e) => {
            setSalario(e.target.value);
          }}
        />
      </span>
      <span>
        <Input
          type="text"
          name="cargo"
          value={cargo}
          onChange={(e) => {
            setCargo(e.target.value);
          }}
        />
      </span>
      <BtnStyled>
        <Button name={"salvar"} onClick={handleSubmit} type="submit" />
      </BtnStyled>
    </form>
  </FormStyled>
</ContainStyled>
);
  //return <Form />;
};
