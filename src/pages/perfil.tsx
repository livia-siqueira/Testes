import { Header } from "../components/headerPerfil";
import { UseInfoP } from "../components/userInfoP/index";

export function Perfil() {
  return (
    <div>
      <Header pagContext="User" />
      <UseInfoP />
    </div>
  );
}
