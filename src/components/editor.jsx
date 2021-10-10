import React from "react";
import styled from "styled-components";
import CardEditForm from "./card_edit_form";

const Section = styled.section`
  flex-basis: 50%;
`;

const Editor = ({ cards }) => {
  return (
    <Section>
      <h1>Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm key={cards[key].id} card={cards[key]} />
      ))}
    </Section>
  );
};

export default Editor;
