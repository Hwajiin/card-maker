import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Editor from "./editor";
import Footer from "./footer";
import Header from "./header";
import Preview from "./preview";

const SMaker = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  min-height: 0;
  flex: 1;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [cardRepository, userId]);

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          history.push("/");
        }
      });
  });

  const createOrUpdateCards = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCards = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <SMaker>
      <Header onLogout={onLogout} />
      <Main>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCards={createOrUpdateCards}
          updateCards={createOrUpdateCards}
          deleteCards={deleteCards}
        />
        <Preview cards={cards} />
      </Main>
      <Footer />
    </SMaker>
  );
};

export default Maker;
