import { Button, Container, Return, User } from "./styles";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import { useContext } from "react";
import { Context } from "../../context/index.js";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";

interface header {
  pagContext: string;
}
export function Header(props: header) {
  const con = useContext(Context);
  const history = useHistory();
  const viewTypeUser = props.pagContext;

  async function RedifinedUser() {
    con.setDataUser("");
    history.push("/");
  }
  async function SavedUser() {
    const response = await api.get(`users/${con.followerTemp.login}`);
    const repositorys = await api.get(`users/${con.followerTemp.login}/repos`);
    const followers = await api.get(
      `users/${con.followerTemp.login}/followers`
    );
    const followings = await api.get(
      `users/${con.followerTemp.login}/following`
    );
    con.setFollowingUser(followings.data);
    con.setDataUser(response.data);
    con.setReposUser(repositorys.data);
    con.setFollowersUser(followers.data);
    con.setDataUser(response.data);
    console.log(response.data);
    history.push("/Perfil");
  }

  function ReturnPerfil() {
    history.push("/Perfil");
  }

  return (
    <Container>
      <Return onClick={ReturnPerfil}>
        {viewTypeUser !== "User" ? (
          <FiArrowLeft className="img" />
        ) : (
          <FiArrowLeft className="Noimg" />
        )}
      </Return>
      <div id="components-header">
        <User>
          #
          {viewTypeUser !== "User"
            ? con.followerTemp?.login
            : con.dataUser?.login}
        </User>
        <Button onClick={viewTypeUser === "User" ? RedifinedUser : SavedUser}>
          {viewTypeUser === "User" ? "Sair" : "Salvar"}
          {viewTypeUser === "User" ? (
            <FiLogOut className="imgSair" />
          ) : (
            <FiLogIn className="imgSalvar" />
          )}
        </Button>
      </div>
    </Container>
  );
}
