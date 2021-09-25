import { AvatarFollowers, Container, UserAvatar } from "./styles";


interface Avatar {
  avatar_url: string;
  where: string;
}

export function UseAvatar(props: Avatar) {
  return (
    <Container>
      {props.where === "infoUser" ? (
        <UserAvatar src={props.avatar_url} />
      ) : (
        <AvatarFollowers src={props.avatar_url} />
      )}
    </Container>
  );
}
