import { Button } from "../../components/Button";
import styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { Input } from "../../components/Input";

export const PageThree = () => {
  const { handleInformacao } = useContext(CustomerContext);

  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [renda, setRenda] = useState("");
  const [profissao, setProfissao] = useState("");

  const handleSubmit = () => {
    handleInformacao({ dataNascimento, cpf, renda, profissao });
  };

  return (
    <form className={styles.container}>
      <Input
        type="text"
        name="Data Nascimento"
        value={dataNascimento}
        onChange={(e) => {
          setDataNascimento(e.target.value);
        }}
      />

      <Input
        type="text"
        name="cpf"
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
      />

      <Input
        type="text"
        name="Renda Mensal"
        value={renda}
        onChange={(e) => {
          setRenda(e.target.value);
        }}
      />

      <Input
        type="text"
        name="Profissão"
        value={profissao}
        onChange={(e) => {
          setProfissao(e.target.value);
        }}
        required={true}
      />

      <div className={styles.botao}>
        <Link to="/pagetwo">
          <Button name="Voltar" />
        </Link>
        <Link to="/cliente">
          <Button name="Salvar" onClick={handleSubmit} type="submit" />
        </Link>
      </div>
    </form>
  );
};
