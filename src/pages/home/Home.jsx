import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import { PageOne } from "../Cadastrar/PageOne"



export const Home = () => {
    return(
    <main className={styles.container}>
      <img src="https://blog.solides.com.br/wp-content/uploads/2021/07/Indice-de-aproveitamento.png"></img>
    </main>
    )
}