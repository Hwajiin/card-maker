import React from "react";
import styled from "styled-components";
import Card from "./card";

const Section = styled.section`
  flex-basis: 50%;
  /* overflow-y: scroll; */
`;

const Preview = ({ cards }) => {
  return (
    <Section>
      <h1>Preview</h1>
      <ul>
        {Object.keys(cards).map((key) => (
          <Card key={cards[key].id} card={cards[key]} />
        ))}
      </ul>
    </Section>
  );
};

export default Preview;
