import { Button } from "../../components/Button";
import styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { Input } from "../../components/Input";

export const PageOne = () => {

  const { handleInformacao } = useContext(CustomerContext);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = () => {
    handleInformacao({ nome, sobrenome, email, telefone });
  };

  return (
    <form className={styles.container}>
      <Input
        type="text"
        name="nome"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        required={true}
      />

      <Input
        type="text"
        name="sobrenome"
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        required={true}
      />

      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required={true}
      />

      <Input
        type="tel"
        name="telefone"
        value={telefone}
        onChange={(e) => {
          setTelefone(e.target.value);
        }}
        required={true}
      />

      <div className={styles.botao}>
        <Link to="/pagetwo">
          <Button onClick={handleSubmit} name="Próximo" type="submit" />
        </Link>
      </div>
    </form>
  );
};
