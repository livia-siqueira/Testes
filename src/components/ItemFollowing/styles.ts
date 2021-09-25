import styled from "styled-components";


export const Container = styled.div`
   width: 100%;
   height: 100%;
   cursor: pointer;
   background-color: #292929;
   border: 0;
   padding: 68px;
   display: flex;
   justify-content: space-between;
   color: white;
   &:first-child{
    margin-top: 25px;
   }
   
   & + button {
       
       border-top: solid 1px #7070705A;
   }
   
`
export const Span = styled.span`
  background-color: yellow;
  color: yellow;
  height: 25px;
  border-radius: 0 12px 12px 0;
`

export const ItemsLeft = styled.div`
    display: flex;
    margin-left: -5rem;

`
export const Login = styled.p`
    display: flex;
    justify-content: space-evenly;
    margin-left: 15px;


`

export const Items = styled.div`
    display: flex;
    margin-left: 15px;

`