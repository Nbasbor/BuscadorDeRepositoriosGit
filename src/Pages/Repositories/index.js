import React, { useEffect, useState } from 'react';
import * as S from './styled'; // acessa tudo atravez da variável s
import {useHistory} from 'react-router-dom';

export default function Repositories(){
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear(); //limpa depois de setar
        } else{
            history.push('/') // direciona para home
        }
    }, []);
    return (
        <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
           {repositories.map(repository => {
               return (
                   <S.ListItem>Repositório: {repository}</S.ListItem>
               )
           })} 
        </S.List>
{/*             <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem>
            <S.ListItem>Respositório: Nome Repositório</S.ListItem> */}
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

