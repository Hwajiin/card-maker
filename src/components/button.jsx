import React from "react";
import styled from "styled-components";

const SButton = styled.button`
  width: 50%;
`;

const Button = ({ onClick, name }) => {
  return <SButton onClick={onClick}>{name}</SButton>;
};

export default Button;
