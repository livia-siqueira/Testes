import { Container, Title } from "./styles";
import { Context } from "../../context";
import { useContext } from "react";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { Content } from "./styles";
import { Button } from "../headerPerfil/styles";
import { useHistory } from "react-router";




export function HeaderRepos() {
  const con = useContext(Context);
  const history = useHistory()
  function ReturnPerfil (){
   
    history.push('/Perfil');
  }

  return (
    <Container>
      <Content>
        <Button onClick={ReturnPerfil}><FiArrowLeft className="img" /></Button>
        <Title>{con.dataUser?.public_repos} repositórios</Title>
      </Content>
    </Container>
  );
}
