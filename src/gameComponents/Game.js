import React, { useState, useEffect } from "react";

// import PlayingArea from "./PlayingArea";

import deckofcards from '../deck-of-cards.js';


const Game = () => {

  const [deck, setDeck] = useState(deckofcards);

  console.log(deck);
  console.log(Math.floor(Math.random() * 52));
  console.log("DECK test random card: " + JSON.stringify(deck[Math.floor(Math.random() * 52)]));

  const shuffleDeck = currentdeck => {
    console.log("shuffleDeck will BEGIN now");
    let shuffleddeck = currentdeck;

    let randocard1 = Math.floor(Math.random() * 52) 
    console.log("shuffleddeck[randocard1]: " + JSON.stringify(shuffleddeck[randocard1]))

    for (var x = 1; x <= 100; x++) {
      let randomcard1 = Math.floor(Math.random() * 52)
      let randomcard2 = Math.floor(Math.random() * 52)
      let duplicatecard1 = shuffleddeck[randomcard1]

      shuffleddeck[randomcard1] = shuffleddeck[randomcard2]
      shuffleddeck[randomcard2] = duplicatecard1

      console.log("shuffleddeck[randomcard1]: " + shuffleddeck[randomcard1])
      console.log("shuffleddeck[randomcard2]: " + shuffleddeck[randomcard2])
    }

    setDeck(shuffleddeck);
    console.log("shuffleddeck AFTER shuffling: " + JSON.stringify(shuffleddeck));
  };

  useEffect(() => {
      console.log("useEffect: deck test: " + JSON.stringify(deck)); 
      console.log("useEffect: shuffleDeck will be TRIGGERED now");
      shuffleDeck(deck); 

  });


  return (
    <>
    </>
  )
};

export default Game;
