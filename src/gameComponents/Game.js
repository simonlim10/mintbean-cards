import React, { useState, useEffect } from "react";

// import PlayingArea from "./PlayingArea";

import deckofcards from '../deck-of-cards.js';


const Game = () => {
  //useEffect
  const [deck, setDeck] = useState(deckofcards);

  console.log(deck);
  console.log(Math.floor(Math.random() * 52));
  console.log("DECK test random card: " + JSON.stringify(deck[Math.floor(Math.random() * 52)]));


  return (
    <>
    </>
  )
};

export default Game;
