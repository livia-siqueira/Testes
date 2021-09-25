import React, { useContext } from "react";
import { Context } from "../../context/index";
import { Container, Content, Item } from "./styles";
import { ItemRepository } from "../ItemRepository/index";
import { HeaderRepos } from "../headerRepos";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  private: boolean;
}

export function ListRepositorys() {
  const con = useContext(Context);
  return (
    <Container>
      <HeaderRepos />
      <Content>
        <Item>
          {con.reposUser?.map((repo: Repository) => {
            return (
              <ItemRepository
                key={repo.name}
                name={repo.name}
                description={repo.description}
                stargazers_count={repo.stargazers_count}
                private={repo.private}
              />
            );
          })}
        </Item>
      </Content>
    </Container>
  );
}
