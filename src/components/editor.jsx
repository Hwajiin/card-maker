import React from "react";
import styled from "styled-components";
import CardEditForm from "./card_edit_form";
import CardAddForm from "./card_add_form";

const Section = styled.section`
  flex-basis: 50%;
  overflow-y: scroll;
`;

const Editor = ({ FileInput, cards, addCards, updateCards, deleteCards }) => {
  return (
    <Section>
      <h1>Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={cards[key].id}
          FileInput={FileInput}
          card={cards[key]}
          updateCards={updateCards}
          deleteCards={deleteCards}
        />
      ))}
      <CardAddForm FileInput={FileInput} addCards={addCards} />
    </Section>
  );
};

export default Editor;
