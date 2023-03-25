import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { PageOne } from "./pages/Cadastrar/PageOne";
import { PageTwo } from "./pages/Cadastrar/PageTwo";
import { PageThree } from "./pages/Cadastrar/PageThree";

import { Cliente } from "./pages/cliente/Cliente";
import { CustomerProvider } from "./contexts/customer";

import "./styles/global.css";

import { Layout } from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomerProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
            <Route path="/pagethree" element={<PageThree />} />
            <Route path="/cliente" element={<Cliente />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  </CustomerProvider>
);
