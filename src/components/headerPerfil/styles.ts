import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 9rem;
    background-color: #1F1F1F;

    #components-header{
        width: 40%;
        height: 10%;
        margin: auto;
        display: flex;
        font-size: 1rem;
        justify-content: space-between;
    }
`
export const User = styled.p`
    color: white;
    margin-top: 12px;
    display: block;
    margin-left: 5px;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 30px;
    cursor: pointer;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 1rem;

    .imgSair{
        font-size: 16px;
        color: red;
        margin-left: 6px;
    }

    .imgSalvar{
        color: green;
        font-size: 16;
        margin-left: 6px;
    }
`

export const Return = styled.button `
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0px;
    margin-top: 20px;
    margin-left: 400px;

    .img{
        color:white;
        font-size: 20px;
    }

    .Noimg{
        display: none;
        background-color: transparent;
    }

`
    