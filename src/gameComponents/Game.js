import React, { useState, useEffect } from "react";

// import PlayingArea from "./PlayingArea";

import deckofcards from '../deck-of-cards.js';


const Game = () => {
  //useEffect
  const [deck, setDeck] = useState(deckofcards);

  console.log(deck);
  console.log(Math.floor(Math.random() * 52));
  console.log("DECK test random card: " + JSON.stringify(deck[Math.floor(Math.random() * 52)]));


  const shuffleDeck = currentdeck => {
    let shuffleddeck = currentdeck;
    for (let x = 1; x > 10; x++) {
      shuffleddeck[Math.floor(Math.random() * 52)] = shuffleddeck[Math.floor(Math.random() * 52)];
      console.log("shuffleddeck: " + shuffleddeck);
    }

    console.log("deck will be shuffled now");
    setDeck(shuffleddeck);
  };

  useEffect(() => {
    return () => {

     console.log("useEffect: deck will be shuffled now");
      shuffleDeck(deck);
    }
  }, []);


  return (
    <>
    </>
  )
};

export default Game;
