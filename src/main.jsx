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
import { CustomerProvider } from "./contexts/customer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageone" element={<CustomerProvider><PageOne  /></CustomerProvider>} />
        <Route path="/pagetwo" element={<CustomerProvider><PageTwo /></CustomerProvider>} />
        <Route path="/pagethree" element={<CustomerProvider><PageThree /></CustomerProvider>} />
        <Route path="/cliente" element={<CustomerProvider><Cliente /></CustomerProvider>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  
  
);
