import React, { useContext } from "react";
import { Container, Items, ItemsLeft, Login } from "./styles";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { UseAvatar } from "../userAvatar";
import { Span } from "./styles";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import { Context } from "../../context/index";

interface Seguidor {
  login: string;
  avatar_url: string;
}

export function ItemFollower(props: Seguidor) {
  const history = useHistory();
  const con = useContext(Context);

  async function User() {
    const response = await api.get(`users/${props?.login}`);
    con.setFollowerTemp(response.data);
    history.push("/follower");
  }
  return (
    <Container onClick={User}>
      <Items>
        <ItemsLeft>
          <Span>iz</Span>
          <UseAvatar avatar_url={props?.avatar_url} where="FollowersAvatar" />
        </ItemsLeft>
        <Login>#{props?.login}</Login>
      </Items>
      <FiArrowRight size={18} />
    </Container>
  );
}
