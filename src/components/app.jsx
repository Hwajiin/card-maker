import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login";
import styled from "styled-components";
import Maker from "./maker";

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = ({ authService, FileInput }) => {
  return (
    <SApp>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </SApp>
  );
};

export default App;
