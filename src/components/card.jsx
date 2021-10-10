import React from "react";
import styled from "styled-components";

const SCard = styled.li`
  display: flex;
  margin: 15px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  margin-right: 15px;
`;

const Container = styled.div``;

const defualtImage = "https://picsum.photos/200";

const Card = ({ card }) => {
  const { name, company, email, message, theme, fileURL, fileName } = card;

  const url = fileURL ? fileURL : defualtImage;

  return (
    <SCard theme={getStyled(theme)}>
      <Image url={url} />
      <Container>
        <h3>{name}</h3>
        <p>{company}</p>
        <p>{email}</p>
        <p>{message}</p>
      </Container>
    </SCard>
  );
};

const getStyled = (theme) => {
  switch (theme) {
    case "dark":
      return { background: "black", fontColor: "white" };
    case "light":
      return { background: "white", fontColor: "black" };
    case "colorful":
      return { background: "linear-gradient(coral, pink)", fontColor: "black" };
  }
};

export default Card;
