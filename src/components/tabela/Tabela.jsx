export const Tabela = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="4">Informações de Cadastro</th>
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
        <th>Renda Mensal</th>
        <th>Profissão</th>
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
        <td>{props.data}</td>
        <td>{props.cpf}</td>
        <td>{props.renda}</td>
        <td>{props.prof}</td>
      </tr>
      </tbody>
      
    </table>
  );
};
