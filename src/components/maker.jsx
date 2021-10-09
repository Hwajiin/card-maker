import React, { useEffect } from "react";
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
        <Editor />
        <Preview />
      </Main>
      <Footer />
    </SMaker>
  );
};

export default Maker;
