import { useState, useEffect } from "react";
import { createContext } from "react";
import { Post, Delete, Get, GetId } from "../service/requisicao.js";
export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [colaboradores, setColaboradores] = useState([]);
  const [colaborador, setColaborador] = useState([]);

  const handleInformacao = (info) => {
    Post(info)
      .then(mostrarColaborador())
      .catch((e) => {
        console.log(e);
      });
  };
  const buscarId = (id) => {
    GetId(id)
      .then((res) => {
        console.log(res.data);
        setColaborador(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deletarId = (id) => {
    Delete(id, colaboradores)
      .then(mostrarColaborador())
      .catch((e) => {
        console.log(e);
      });
  };

  const mostrarColaborador = () => {
    Get()
      .then((res) => {
        setColaboradores(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    mostrarColaborador();
  }, []);

  return (
    <CustomerContext.Provider
      value={{
        handleInformacao,
        colaboradores,
        buscarId,
        deletarId,
        colaborador,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
