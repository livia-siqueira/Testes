import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 120px;
    background-color: #1F1F1F;
    
    .img {
        color: white;
        width: 26px;
        height: 26px;
    }

`
export const Title = styled.h2`
    color: white;
    font-size: 18px;
    margin-top: auto;
`

export const Content = styled.div`
    width: 30rem;
    display: flex;
    justify-content: left;
    margin: 0 auto;
    padding-top: 20px;
` 

export const Return = styled.button`
    background-color: transparent;
    border:none;
    margin-right: 80px;
    cursor: pointer;
`