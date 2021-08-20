import React, { useState } from 'react';
import axios from 'axios'; // sempre que importar algo sem passar de onde ele importa o pacote
// para colocar o local , pasta, ou arquivo import css from './style.css'
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App() { //recebe o parametro props
  const history = useHistory();
  const [usuario, setUsuario] = useState(''); // controle de componente
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      // then por que é uma promisse
      .catch(err => {
        setErro(true);
      })
  }
  return (
    <S.DivX>
      <S.Title>Encontre os repositórios de um usuário</S.Title>
      <S.Div>
          
          {/* <p> {usuario}</p> */}
          <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
          {/* //onchange muda o valor após ser escrito qualquer coisa no input
          //value usuario pega o valor digitado no estado do input para os dados  */}
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Div>
      
      {erro ? <S.ErrorMsg>Usuário não encontrado, Tente novamente!</S.ErrorMsg>: ''} {/* se erro for verdadeiro exiba a mensagem se não não exiba nada */}
    </S.DivX>
  );
}

export default App;
