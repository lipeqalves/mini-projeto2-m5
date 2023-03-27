import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { Layout } from "./components/Layout";
import { Colaboradores } from "./pages/Colaboradores";
import { CustomerProvider } from "./contexts/customer";

import GlobalStyle from "./styles/global.style";
import { Cadastro } from "./pages/Cadastrar";
import { Colaborador } from "./pages/Colaborador";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomerProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/colaborador" element={<Colaborador />} />
          </Routes>
        </Layout>
        <GlobalStyle />
      </BrowserRouter>
    </React.StrictMode>
  </CustomerProvider>
);
