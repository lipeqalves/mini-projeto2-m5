import styled from "styled-components";

export const CardStyled = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UL = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li {
     
    text-align: center;
    width: 100%;
    min-height: 30px;
    border: 1px solid #d3d3d3;
    text-transform: capitalize;
  }

`;
export const Btn = styled.button`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: transparent;
  color: #7f6c9c;
 
`;
export const P = styled.p`
padding-top:.5em; 
`