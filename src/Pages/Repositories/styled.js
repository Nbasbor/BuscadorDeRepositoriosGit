import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
text-align: center;
font-size: 34px;
font-family: sans serif;
color: #333;
margin: 20px
`
export const List = styled.ul`
    list-style: none;
    padding: none;
    font-family: sans-serif;
    color: #333;
`
export const ListItem = styled.li`
    margin: 5px;
    color: #fff;
    font-family: sans serif;
    background-color: #333;
    padding: 10px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    align-itens: center;
    justify-content: center;
    margin 0 auto;
    
`
export const LinkHome = styled(Link)`
    display: block;
    margin: 5px auto;
    color: #fff;
    font-family: sans serif;
    background-color: #333;
    padding: 10px;
    width: 50px;
    justify-content: center;
    align-itens: center;
    text-align: center;
`