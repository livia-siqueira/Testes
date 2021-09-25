import { useContext } from "react";
import { Context } from "../../context/index";
import { HeaderFollower } from "../headerFollower";
import { ItemFollowing } from "../ItemFollowing";
import { Container, Content } from "./styles";

export interface Following {
    login: string;
    avatar_url: string;
  
  }

  

export function ListFollowing() {
    const con = useContext(Context);
    return (
      <Container>
      <HeaderFollower name="Following" />
        <Content>
            {con.followingUser?.map((f: Following) => {
                return (
              <ItemFollowing
                key={f.login}
                login={f.login}
                avatar_url={f.avatar_url}
              />
              )
            }   
            )}
              
        </Content>
      </Container>
    );
  }