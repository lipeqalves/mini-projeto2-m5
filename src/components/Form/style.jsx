import styled from "styled-components";

export const ContainStyled = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;

  @media (min-width: 600px) {
    padding: 0;
  }

  h3 {
    margin: 1rem;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const FormStyled = styled.div`
  background: #cfcad8;
  padding: 1em;

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  form p {
    margin: 0;
  }
`;

export const BtnStyled = styled.span`
  grid-column: 1 / 3;
`;

