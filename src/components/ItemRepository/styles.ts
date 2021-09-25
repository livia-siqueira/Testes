import styled from "styled-components";


export const Container = styled.li`
   width: 100%;
   margin-top: 100px;

   &:first-child{
    margin-top: 25px;
   }
   
   & + li {
       
       border-top: solid 1px #7070705A;
   }
   color: white;
`


export const Title = styled.p`
    color: white;
    font-size: 20px;

`
export const Imagens = styled.div`
   display: flex;
   
   .publicImg {
       margin-right: 10px;
   }

`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

`

export const Description = styled.p`
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 15px;

`

export const Span = styled.span`
    background-color: yellow;
  color: yellow;
  margin-right: 10px;
  border-radius: 0 12px 12px 0;
`

export const Favorites = styled.span`
    
    width: 20px;
    height: 20px;
    margin-left: 5px;
`
export const ContentFav = styled.div`
    font-size: 20px;
    display: flex;
`
