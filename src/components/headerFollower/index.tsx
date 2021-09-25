import { useContext } from "react";
import { Context } from "../../context";
import { Container, Content, Return, Title } from "./styles";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { Button } from "../headerRepos/styles";
import { useHistory } from "react-router";


interface ChangeUser {
  name: string;
}


export function HeaderFollower(props: ChangeUser) {
  const con = useContext(Context);
  const following = con.dataUser?.following;
  const followers = con.dataUser?.followers;
  const history = useHistory()

  function ReturnPerfil (){
    history.push('/Perfil');
  }



  return (
    <Container>
      <Content>
        <Return  onClick={ReturnPerfil}>
          <FiArrowLeft className="img" />
        </Return>
        <Title>
          {props.name === "Following"
            ? following + "   seguindo"
            : followers + "   seguidores"}
        </Title>
      </Content>
    </Container>
  );
}
