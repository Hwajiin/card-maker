import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Editor from "./editor";
import Footer from "./footer";
import Header from "./header";
import Preview from "./preview";

const SMaker = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    0: {
      id: 0,
      name: "jiin",
      company: "kakao",
      email: "borderline0px@gmail.com",
      message: "fighting",
      theme: "colorful",
      fileName: "jiin",
      fileURL: null,
    },
    1: {
      id: 1,
      name: "hyoseob",
      company: "kakao",
      email: "hyoseob@gmail.com",
      message: "hongcheongi",
      theme: "dark",
      fileName: "hyoseob",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "jk",
      company: "kakao",
      email: "jkxxx@gmail.com",
      message: "permission to dance",
      theme: "light",
      fileName: "jk",
      fileURL: null,
    },
  });

  const onLogout = () => {
    authService //
      .logout();
  };

  const history = useHistory();

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          history.push("/");
        }
      });
  });

  return (
    <SMaker>
      <Header onLogout={onLogout} />
      <Main>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </Main>
      <Footer />
    </SMaker>
  );
};

export default Maker;
