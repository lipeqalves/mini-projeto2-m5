export const Tabela = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4" > Informações do Colaborador  {props.nome}</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <th>Nome</th>
        <th>Sobre Nome</th>
        <th>E-mail</th>
        <th>Telefone</th>
        <th>Cep</th>
        <th>Rua</th>
        <th>Bairro</th>
        <th>Numero</th>
        <th>Data Nascimento</th>
        <th>CPF</th>
        <th>Salario Mensal</th>
        <th>Cargo</th>
      </tr>
      <tr>
        <td>{props.nome}</td>
        <td>{props.sobrenome}</td>
        <td>{props.email}</td>
        <td>{props.telefone}</td>
        <td>{props.cep}</td>
        <td>{props.rua}</td>
        <td>{props.bairro}</td>
        <td>{props.numero}</td>
        <td>{props.dataNascimento}</td>
        <td>{props.cpf}</td>
        <td>{props.salario}</td>
        <td>{props.cargo}</td>
      </tr>
      </tbody>
      
    </table>
  );
};
