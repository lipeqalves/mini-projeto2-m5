import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { PageOne } from "./pages/Cadastrar/PageOne";
import { PageTwo } from "./pages/Cadastrar/pageTwo/PageTwo";
import { PageThree } from "./pages/Cadastrar/pageThree/PageThree";
import { Footer } from "./components/footer/Footer";
import { Cliente } from "./pages/cliente/Cliente";
import { useState } from "react";
import { CustomerContext } from "./contexts/customer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageone" element={<PageOne  />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/cliente" element={<Cliente />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  
  
);
