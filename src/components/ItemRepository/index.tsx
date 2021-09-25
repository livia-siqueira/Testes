import React from "react";
import { Container, ContentFav, Imagens, Span } from "./styles";
import { Description, Favorites, Title } from "./styles";
import { FiUnlock } from "@react-icons/all-files/fi/FiUnlock";
import { FiLock } from "@react-icons/all-files/fi/FiLock";
import { Content } from "./styles";
import { FiStar } from "@react-icons/all-files/fi/FiStar";

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  private: boolean;
}

export function ItemRepository(props: Repository) {
  return (
    <Container>
      <Title>
        <Span>i</Span>
        {props?.name}
      </Title>
      <Description>
        {props?.description}
        <Content>
          <ContentFav>
            <FiStar color="#FFCE00"/>
            <Favorites>{props?.stargazers_count}</Favorites>
          </ContentFav>
          <Imagens>
            <FiUnlock color="#63BF1F" className="publicImg"/>
            <FiLock color="#CC042A"/>
          </Imagens>
        </Content>
      </Description>
    </Container>
  );
}
