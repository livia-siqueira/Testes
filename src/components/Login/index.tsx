import { Container, Enter } from "./styles";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import { useState } from "react";
import { api } from "../../services/api";
import { Context } from "../../context/index.js";
import { useContext } from "react";
import { useHistory } from "react-router";

export function Login() {
  const [searchUser, setSearchUser] = useState("");

  const con = useContext(Context);
  const history = useHistory();

  async function Validate() {
    if (searchUser !== "") {
      const response = await api.get(`users/${searchUser}`);
      const repositorys = await api.get(`users/${searchUser}/repos`);
      const followers = await api.get(`users/${searchUser}/followers`);
      const followings = await api.get(`users/${searchUser}/following`);
      con.setFollowingUser(followings.data);
      con.setDataUser(response.data);
      con.setReposUser(repositorys.data);
      con.setFollowersUser(followers.data);
      console.log(followers);
      history.push("/Perfil");
    } else {
    }
  }
  return (
    <Container>
      <div id="content">
        <GoMarkGithub color="yellow" size={200} />
        <Enter>
          <input
            id="input"
            type="text"
            placeholder="Usuário"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          ></input>
          <button type="button" onClick={Validate}>
            ENTRAR
            <span>
              <FiArrowRight size={20} />
            </span>
          </button>
        </Enter>
      </div>
    </Container>
  );
}
