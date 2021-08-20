import styled from "styled-components";

export const Button =  styled.button`
    background-color: #333;
    color: #fff;
    font-family: sans serif;
    font-size: 16px;
    text-align: center;
    border-radius: 0px 5px 5px 0px;
`
export const Input =  styled.input`
    background-color: #fff;
    color: #333;
    font-family: sans serif;
    font-size: 16px;
    text-align: center;
    border: 5px #333 double;
    border-radius: 5px 0px 0px 5px;
    &: focus,
    &: active{
        outline: none;
    }
`
export const Div =  styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    font-family: sans serif;
`
export const DivX =  styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    flex-direction: column;
    font-family: sans serif;
`
export const Title = styled.h1`
text-align: center;
font-size: 34px;
font-family: sans serif;
color: #333;
`
export const ErrorMsg = styled.p`
    margin: 20px;
    color: red;
    display: block;
    font-size: 21px;
    font-family: sans serif;
    text-align: center;
    align-itens: center;
    font-weight: bold;
`