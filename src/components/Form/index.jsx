import { Input } from "../Input";
import { Button } from "../Button";

import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import "./style.css";
export const Form = () => {
 
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

  const handleSubmit = () => {
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
  };
 
  return (
    <>
      <div className="contain">
        {/*<div class="wrapper">
          <div class="contacts">
            <h3>Our contacts</h3>
            <ul>
              <li>San Joe St.</li>
              <li>00-1212121-11</li>
              <li>mail@mail.com</li>
            </ul>
          </div> */}

        <div className="form">
          <h3>Cadastro de Funcionário</h3>
          <form action="">
            <span>
              <Input
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
            <span className="full-width">
              <Link to="/">
                <Button name={"salvar"} onClick={handleSubmit} type="submit" />
              </Link>
            </span>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
