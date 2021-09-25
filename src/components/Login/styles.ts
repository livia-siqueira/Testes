import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  height: 25rem;
  margin: 5rem auto 0;

  #content {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;

    
      button {
        cursor: pointer;
        display: flex;
        justify-items: center;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        border-radius: 0.25rem;
        border: 0;
        width: 9rem;
        height: 2.5rem;
        background-color: var(--yellow);
        font-weight: bold;
        transition: filter 2ms;

        span{
          margin: 3px 0 0 2px;
        }


        &:hover{
            filter: brightness(0.9);
        }
      }
    }
  

`;

export const Enter = styled.div`
      display: grid;
      justify-items: center;

      input {
        padding: 5px 20px;
        margin-top: 1.8rem;
        display: block;
        background-color: #ffffff;
        width: 15rem;
        height: 3rem;
        border-radius: 0.5rem;
        border: 0;

        ::placeholder{
            font-family: 'Roboto', sans-serif;
            font-weight: normal;
            color: #535353; 
            font-size: 1rem;
        }
      }

` 


export const Message = styled.span`
  margin-left: 0 auto;
  color: white;

`

export const Span = styled.span`
  .cLabel{
    color: red;
  font-weight: normal;
  font-size: 10px;
  margin-top: -30px;
  margin-left: 50%;

  }
  .sLabel {
    display: none;
  }
`

