import React, { useState, useEffect } from "react";

// import PlayingArea from "./PlayingArea";
import PlayerHand from "./PlayerHand";
import Card from "./Card";

import deckofcards from '../deck-of-cards.js';


const Game = () => {

  const [deck, setDeck] = useState(deckofcards);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);


  useEffect(() => {
    console.log("useEffect: deck test: " + JSON.stringify(deck)); 
    console.log("useEffect: shuffleDeck will be TRIGGERED now");
    initializeGame(); 
  }, []);

  const initializeGame = () => {
    shuffleDeck(deck);
    dealInitialHands();
    console.log("playerHand: " + JSON.stringify(playerHand))
  }

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

      // console.log("shuffleddeck[randomcard1]: " + shuffleddeck[randomcard1])
      // console.log("shuffleddeck[randomcard2]: " + shuffleddeck[randomcard2])
    }

    setDeck(shuffleddeck);
    console.log("shuffleddeck AFTER shuffling: " + JSON.stringify(shuffleddeck));
  };


  const dealInitialHands = () => {
    let usedDeck = deck
    // let dealthands = usedDeck.slice(-7) 
    setPlayerHand(usedDeck.splice(-7,7))
    setPlayerTwoHand(usedDeck.splice(-7,7)) 
    console.log("playerHand 2 : " + JSON.stringify(playerHand));

    // console.log("usedDeck slice: " + JSON.stringify(usedDeck.slice(-7)));

    // usedDeck.splice(-7,7)
    console.log("usedDeck: " + JSON.stringify(usedDeck));
    // console.log("usedDeck splice: " + JSON.stringify(usedDeck.splice(-7,7)));

    setDeck(usedDeck)
    console.log("playerHand 2 : " + JSON.stringify(playerHand));
  }


  const sortCardsInHand = () => {
   
  }

  const checkIfOpponentHasRequestedCards = () => {
    
  }

  const goFish = () => {

  }

  const checkForWinner = () => {

  }

  return (
    <>
      <PlayerHand 
        playerHand={playerHand}
        setPlayerHand={setPlayerHand}
      />
    </>
  )
};

export default Game;
