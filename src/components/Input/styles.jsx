import styled from "styled-components";

export const Wrapper = styled.span`
  input {
    width: 100%;
    border: 1px solid #d3d3d3;
    padding: 0.5em;
    font-size: 16px;
  }
  input:focus {
    outline: 2px solid #7f6c9c;
  }

  label {
    display: block;
    text-transform: capitalize;
    color: #7f6c9c;
    font-weight: bold;
  }
`;
