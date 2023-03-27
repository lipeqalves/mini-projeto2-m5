import { CardStyled, UL, Btn, P } from "./style";
import { FaTrash } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { useContext } from "react";
import { CustomerContext } from "../../contexts/customer";
import { Link } from "react-router-dom";

export const CardColaborador = (props) => {
  const { buscarId, deletarId } = useContext(CustomerContext);
  return (
    <CardStyled>
      <UL>
        <li>
          <P>Id</P>
        </li>
        <li>
          <P>Nome</P>
        </li>
        <li>
          <P>Função</P>
        </li>
        <li>
          <P>Detalhes</P>
        </li>
        <li>
          <P>Remover</P>
        </li>
      </UL>
      <UL>
        <li>
          <P>#{props.id}</P>
        </li>
        <li>
          <P>
            {" "}
            {props.nome} <span>{props.sobrenome}</span>
          </P>
        </li>
        <li>
          <P>{props.cargo}</P>
        </li>
        <li>
          <Link to="/colaborador">
            <Btn
              onClick={() => {
                buscarId(props.id);
              }}
            >
              <P>
                <BiDetail />
              </P>
            </Btn>
          </Link>
        </li>
        <li>
          <Btn
            onClick={() => {
              deletarId(props.id);
            }}
          >
            <P>
              <FaTrash />
            </P>
          </Btn>
        </li>
      </UL>
    </CardStyled>
  );
};
