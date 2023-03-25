import { Button } from "../../components/Button";
import styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { Input } from "../../components/Input";
import { Api } from "../../service/Api";

export const PageThree = () => {
  const { handleInformacao, informacaoCadastro } = useContext(CustomerContext);

  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("");

  const handleSubmit = () => {
    handleInformacao({ dataNascimento, cpf, salario, cargo });
    handleColaborador(informacaoCadastro, dataNascimento, cpf, salario, cargo);
  };
  const handleColaborador = (
    informacao,
    dataNascimento,
    cpf,
    salario,
    cargo
  ) => {
    Api.post("colaboradores", {
      ...informacao,
      dataNascimento,
      cpf,
      salario,
      cargo,
    });
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
        name="Salario Mensal"
        value={salario}
        onChange={(e) => {
          setSalario(e.target.value);
        }}
      />

      <Input
        type="text"
        name="cargo"
        value={cargo}
        onChange={(e) => {
          setCargo(e.target.value);
        }}
        required={true}
      />

      <div className={styles.botao}>
        <Link to="/pagetwo">
          <Button name="Voltar" />
        </Link>
        <Link to="/">
          <Button name="Salvar" onClick={handleSubmit} type="submit" />
        </Link>
      </div>
    </form>
  );
};
