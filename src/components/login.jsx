import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 60%;
`;

const ButtonBox = styled.section`
  background-color: white;
  width: 100%;
  flex: 1;
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: 2px solid cornflowerblue;
  border-radius: 15px;
  margin: 10px;
  width: 250px;
  height: 30px;
  text-align: center;
  color: #4e86ec;
`;

const Login = () => {
  const history = useHistory();
  const onLogin = () => {};

  return (
    <Div>
      <SLogin>
        <Header />
        <ButtonBox>
          <List>
            <li>
              <Button onClick={onLogin}>Google</Button>
            </li>
            <li>
              <Button onClick={onLogin}>Github</Button>
            </li>
          </List>
        </ButtonBox>
        <Footer />
      </SLogin>
    </Div>
  );
};

export default Login;
