import { Button } from "../../components/Button";
import styles from "../../styles/style.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { Input } from "../../components/Input";

export const PageTwo = () => {
  const { handleInformacao } = useContext(CustomerContext);

  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");

  const handleSubmit = () => {
    handleInformacao({ cep, rua, numero, bairro });
  };

  return (
    <form className={styles.container}>
      <Input
        type="text"
        name="cep"
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
        required={true}
      />

      <Input
        type="text"
        name="rua"
        value={rua}
        onChange={(e) => {
          setRua(e.target.value);
        }}
      />

      <Input
        type="text"
        name="numero"
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
      />

      <Input
        type="text"
        name="bairro"
        value={bairro}
        onChange={(e) => {
          setBairro(e.target.value);
        }}
      />

      <div className={styles.botao}>
        <Link to="/pageone">
          <Button name="Voltar" />
        </Link>
        <Link to="/pagethree">
          <Button name="Próximo" onClick={handleSubmit} type="submit" />
        </Link>
      </div>
    </form>
  );
};
