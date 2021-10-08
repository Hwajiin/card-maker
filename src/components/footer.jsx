import React from "react";
import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: cornflowerblue;
`;

const Title = styled.h1``;

const Footer = () => {
  return (
    <SFooter>
      <Title></Title>
    </SFooter>
  );
};

export default Footer;
