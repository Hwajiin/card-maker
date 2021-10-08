import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login";
import styled from "styled-components";

const SApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <SApp>
      <BrowserRouter>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </SApp>
  );
};

export default App;
