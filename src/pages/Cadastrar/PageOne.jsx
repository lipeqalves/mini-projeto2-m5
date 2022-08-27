import { Button } from "../../components/button/Button";
import styles from "./PageOne.module.css"
import { Tabela } from "../../components/tabela/Tabela"
import { Link } from "react-router-dom";
import { useState } from "react";

export const PageOne = () => {

  const [nome, setNome] = useState()
  const[sobreNome, setSobreNome] = useState()
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState()

  const [cad, setCad] = useState([])

  function cadastro(){
    const newCad ={
      nome:nome,
      sobreNome:sobreNome,
      email:email,
      telefone:telefone,
    }
    setCad(preveState => [...preveState, newCad])
  }
  

  return (
    <main className={styles.container}>
      <form action="#" method="post">
        <fieldset>
          <fieldset className={styles.grupo}>
            <div className={styles.campo}>
              <label>Nome</label>
              <input type="text" onChange={(e) => {
                setNome(e.target.value)
                //console.log(e.target.value)
              }}/>
            </div>
            <div className={styles.campo}>
              <label>Sobrenome</label>
              <input type="text" onChange={(e) => {
                setSobreNome(e.target.value)
               // console.log(e.target.value)
              }}/>
            </div>
          
          <div className={styles.campo}>
            <label>E-mail</label>
            <input type="text" onChange={(e) => {
                setEmail(e.target.value)
                //console.log(e.target.value)
              }}/>
          </div>
          <div className={styles.campo}>
            <label>Telefone</label>
            <input type="text" onChange={(e) => {
                setTelefone(e.target.value)
               // console.log(e.target.value)
              }}/>
          </div>
          </fieldset>
          <div className={styles.botao}>
          <Link to="/pagetwo" onClick={(e) =>{
            cadastro()
          }}><Button label="Próximo"/></Link>
          </div>
          {cad.map((cad, index) => (
            <Tabela key={index} nome={cad.nome} sobreNome={cad.sobreNome} email={cad.email} telefone={cad.telefone}/>))}
            
        </fieldset>
      </form>
    </main>
  );
};
