import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: pink;
  padding: 5px 7px;
  border-radius: 5px;
  color: black;
`;

const Header = ({ onLogout }) => {
  return (
    <SHeader>
      {onLogout && <Button onClick={onLogout}>Logout</Button>}
      <Title>Business Card Maker</Title>
    </SHeader>
  );
};

export default Header;
