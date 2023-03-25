import  { Wrapper} from "./styles.jsx"

export const Input = ({ value, name, type, onChange,required=false }) => {
  return (
    <Wrapper >
      <label htmlFor={name}>{name}</label>
      <input id={name} value={value} type={type} onChange={onChange} />
    </Wrapper>
  );
};
