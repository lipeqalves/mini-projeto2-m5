import { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  const handleSubmit = ({ nome, sobrenome, email, telefone }) => {
    //console.log("dados customore", { nome, sobrenome, email, telefone });

    setNome(nome);
    setSobrenome(sobrenome);
    setEmail(email);
    setTelefone(telefone);
  };
  return (
    <CustomerContext.Provider
      value={{ nome, sobrenome, email, telefone, submit: handleSubmit }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
