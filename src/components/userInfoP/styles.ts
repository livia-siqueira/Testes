import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 5rem;
  margin: -4rem auto 0;
  
`;
export const UserInfoP = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 100px;
`;

export const Nome = styled.h1`
    color: white;
    font-size: 1rem;
    display: inline;
    text-transform: uppercase;
`;

export const Span = styled.span`
  background-color: yellow;
  color: yellow;
  margin-right: 10px;
  border-radius: 0 12px 12px 0;
  
`;

export const DataInfo = styled.div`
  color: white;
  margin-top: 5px;
  margin-left: 15px;
  font-size: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
`

export const FollowersInfos = styled.div`
  background-color: #5252525D;
  width: 100%;
  margin-top: 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`
export const TitleNumber = styled.p`
  font-size: 2rem;
`

export const FollowersInfosDetails = styled.button ` 
    text-align: center;
    color: white;
    cursor: pointer;
    margin: auto 0;
    background-color: transparent;
    border: 0;
    span{
      font-size: 18px;
    }
    &:first-child {
      margin-left: 20px;
    }

    &:last-child {
      margin-right: 20px;
    }
`
export const Bio = styled.div`
    margin-top: 30px;
`

export const BioDescription = styled.p`
  color: white;
  margin-left: 15px;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;

`
