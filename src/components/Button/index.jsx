import { ButtonStyled } from "./styles.jsx";
export const Button = ({ name, type, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {name}
    </ButtonStyled>
  );
};
