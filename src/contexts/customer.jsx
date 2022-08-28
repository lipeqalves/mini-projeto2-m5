import { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');


  const handleSubmit = ({ nome, sobrenome, email, telefone, cep, rua, numero, bairro }) => {
    console.log("dados customore", { nome, sobrenome, email, telefone, cep, rua, numero, bairro });

    setNome(nome);
    setSobrenome(sobrenome);
    setEmail(email);
    setTelefone(telefone);

    setCep(cep);
    setRua(rua);
    setNumero(numero);
    setBairro(bairro);
  };
  return (
    <CustomerContext.Provider
      value={{ nome, sobrenome, email, telefone, cep, rua, numero, bairro, submit: handleSubmit }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
