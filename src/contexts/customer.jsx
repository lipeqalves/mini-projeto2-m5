import { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [informacaoCadastro, setInformacaoCadastro] = useState({});
  const handleInformacao = (info) => {
    setInformacaoCadastro({ ...informacaoCadastro, ...info });
  };

  return (
    <CustomerContext.Provider value={{ handleInformacao, informacaoCadastro }}>
      {children}
    </CustomerContext.Provider>
  );
};
