import { UseAvatar } from "../userAvatar";
import {
  Bio,
  BioDescription,
  Container,
  DataInfo,
  FollowersInfos,
  FollowersInfosDetails,
  Span,
  TitleNumber,
} from "./styles";
import { Nome, UserInfoP } from "./styles";
import { Context } from "../../context/index";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export function UseInfoP() {
  const con = useContext(Context);
  console.log(con.dataUser?.email);
  const history = useHistory();

  function ChangePageListRepos() {
    history.push("/listRepositorys");
  }

  function ChangePageListFollowers() {
    history.push("/listFollowers");
  }

  function ChangePageListFollowings() {
    history.push("/listFollowings");
  }

  return (
    <Container>
      <UseAvatar avatar_url={con.dataUser?.avatar_url} where="infoUser" />
      <UserInfoP>
        <Span>i</Span>
        <Nome>{con.dataUser.name}</Nome>
        <DataInfo>
          <p>{con.dataUser?.email}</p>
          <p>{con.dataUser?.location}</p>
        </DataInfo>
        <FollowersInfos>
          <FollowersInfosDetails onClick={ChangePageListFollowers}>
            <TitleNumber>{con.dataUser?.followers}</TitleNumber>
            <span>Seguidores</span>
          </FollowersInfosDetails>
          <FollowersInfosDetails onClick={ChangePageListFollowings}>
            <TitleNumber>{con.dataUser?.following}</TitleNumber>
            <span>Seguindo</span>
          </FollowersInfosDetails>
          <FollowersInfosDetails onClick={ChangePageListRepos}>
            <TitleNumber>{con.dataUser?.public_repos}</TitleNumber>
            <span>Repositórios</span>
          </FollowersInfosDetails>
        </FollowersInfos>
        <Bio>
          <Span>i</Span>
          <Nome>Bio</Nome>
          <BioDescription>{con.dataUser?.bio}</BioDescription>
        </Bio>
      </UserInfoP>
    </Container>
  );
}
