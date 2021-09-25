import { useContext } from "react";
import { UseAvatar } from "../userAvatar";
import {
  Bio,
  BioDescription,
  Container,
  DataInfo,
  FollowersInfos,
  FollowersInfosDetails,
  Nome,
  Span,
  TitleNumber,
  UserInfoP,
} from "../userInfoP/styles";
import { Context } from "../../context";

export function PagUserFollow() {
  const con = useContext(Context);

  return (
    <Container>
      <UseAvatar avatar_url={con.followerTemp.avatar_url} where="infoUser" />
      <UserInfoP>
        <Span>i</Span>
        <Nome>{con.followerTemp.name}</Nome>
        <DataInfo>
          <p>{con.followerTemp.email}</p>
          <p>{con.followerTemp.location}</p>
        </DataInfo>
        <FollowersInfos>
          <FollowersInfosDetails>
            <TitleNumber>{con.followerTemp.followers}</TitleNumber>
            <span>Seguidores</span>
          </FollowersInfosDetails>
          <FollowersInfosDetails>
            <TitleNumber>{con.followerTemp.following}</TitleNumber>
            <span>Seguindo</span>
          </FollowersInfosDetails>
          <FollowersInfosDetails>
            <TitleNumber>{con.followerTemp.public_repos}</TitleNumber>
            <span>Repositórios</span>
          </FollowersInfosDetails>
        </FollowersInfos>
        <Bio>
          <Span>i</Span>
          <Nome>Bio</Nome>
          <BioDescription>{con.followerTemp.bio}</BioDescription>
        </Bio>
      </UserInfoP>
    </Container>
  );
}
