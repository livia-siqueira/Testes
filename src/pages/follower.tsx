import { Header } from "../components/headerPerfil";
import { PagUserFollow } from "../components/PagUserFollow";

export function Follower() {
  return (
    <>
      <Header pagContext="Follow" />
      <PagUserFollow />
    </>
  );
}
