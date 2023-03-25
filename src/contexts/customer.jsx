import { useState, useEffect } from "react";

import { createContext } from "react";
import { Api } from "../service/Api";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [colaboradores, setColaboradores] = useState({});

  const handleInformacao = (info) => {
    Api.post("colaboradores", {
      ...info,
    });
  };

  useEffect(() => {
    Api.get("/colaboradores").then((res) => {
      setColaboradores(res.data);
    });
  }, []);
  return (
    <CustomerContext.Provider value={{ handleInformacao, colaboradores }}>
      {children}
    </CustomerContext.Provider>
  );
};
