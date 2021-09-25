import { useContext } from "react";
import { Context } from "../../context/index";
import { HeaderFollower } from "../headerFollower";
import { ItemFollower } from "../ItemFollower";
import { Container, Content } from "./styles";

export interface Follower {
  login: string;
  avatar_url: string;
}

export function ListFollowers() {
  const con = useContext(Context);

  return (
    <Container>
      <HeaderFollower name="followers" />
      <Content>
        {con.followersUser?.map((f: Follower) => {
          return (
            <ItemFollower
              key={f.login}
              login={f.login}
              avatar_url={f.avatar_url}
            />
          );
        })}
      </Content>
    </Container>
  );
}
