import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50%;
  }
`;

const Editor = () => {
  return (
    <Section>
      <h1>Editor</h1>
    </Section>
  );
};

export default Editor;
