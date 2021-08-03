import React, { useState, useEffect } from "react";

// import PlayingArea from "./PlayingArea";
import PlayerHand from "./PlayerHand";

import deckofcards from '../deck-of-cards.js';


const Game = () => {

  const [deck, setDeck] = useState(deckofcards);
  const [playerHand, setPlayerHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);

  const [playerTurn, setPlayerTurn] = useState('');

  const [requestedCard, setRequestedCard] = useState('');


  useEffect(() => {
    console.log("useEffect: deck: " + JSON.stringify(deck)); 
    console.log("useEffect: shuffleDeck will be TRIGGERED now");
    initializeGame(); 
  }, []);

  //console.log purposes
  useEffect(() => {
    console.log("useEffect: test playerTurn: " + playerTurn); 
  }, [playerTurn]);
  useEffect(() => {
    console.log("useEffect: test deck: " + JSON.stringify(deck)); 
    console.log("useEffect: test deck.length: " + JSON.stringify(deck.length)); 
  }, [deck]);

  const initializeGame = () => {
    shuffleDeck(deck);
    randomizeWhoGetsFirstTurn();
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

  const randomizeWhoGetsFirstTurn = () => {
    setPlayerTurn(Math.floor(Math.random() * 2))
    console.log("test random playerTurn: " + playerTurn);
  }

  const dealInitialHands = () => {
    let usedDeck = deck
    // let dealthands = usedDeck.slice(-7) 
    setPlayerHand(usedDeck.splice(-7,7))
    setPlayerTwoHand(usedDeck.splice(-7,7)) 
    console.log("playerHand 1 : " + JSON.stringify(playerHand));
    console.log("playerHand 2 : " + JSON.stringify(playerTwoHand));

    // console.log("usedDeck slice: " + JSON.stringify(usedDeck.slice(-7)));

    // usedDeck.splice(-7,7)
    console.log("usedDeck: " + JSON.stringify(usedDeck));
    // console.log("usedDeck splice: " + JSON.stringify(usedDeck.splice(-7,7)));

    setDeck(usedDeck)
    console.log("playerHand 2 : " + JSON.stringify(playerHand));
  }




  const playerTookTurn = number => {

    let handToCheck = playerTwoHand

    const cardsSuccessfullyFished = handToCheck.filter(card => card.number == number);
    const opponentHandAfterBeingFished = handToCheck.filter(card => card.number !== number);

    console.log("opponentHandAfterBeingFished: " + JSON.stringify(opponentHandAfterBeingFished));

    console.log("cardsSuccessfullyFished: " + JSON.stringify(cardsSuccessfullyFished));

    let whoseTurn = playerTurn
    let newDeck = deck
    let goFishedCard = []
    if (cardsSuccessfullyFished.length === 0) {
      goFishedCard = [...newDeck.splice(-1,1)]
      console.log("test goFishedCard: " + JSON.stringify(goFishedCard));
      whoseTurn = 0
      console.log("setPlayerTurn to player2!");
    } else {
      console.log("testz - you got some cards!");
      //alert function tell player to pick again
    }
    setDeck(newDeck)
    setPlayerTurn(whoseTurn)
    setPlayerHand(oldHand => [...oldHand, ...cardsSuccessfullyFished, ...goFishedCard]);
    setPlayerTwoHand(opponentHandAfterBeingFished)
    checkForWinner()
  }

  const playerTwoTookTurn = number => {

    let handToCheck = playerHand

    const cardsSuccessfullyFished = handToCheck.filter(card => card.number == number);
    const opponentHandAfterBeingFished = handToCheck.filter(card => card.number !== number);


    console.log("opponentHandAfterBeingFished : " + JSON.stringify(opponentHandAfterBeingFished));

    console.log("cardsSuccessfullyFished : " + JSON.stringify(cardsSuccessfullyFished));

    let whoseTurn = playerTurn
    let newDeck = deck
    let goFishedCard = []
    if (cardsSuccessfullyFished.length === 0) {
      goFishedCard = [...newDeck.splice(-1,1)]
      console.log("test goFishedCard: " + JSON.stringify(goFishedCard));
      whoseTurn = 1
      console.log("setPlayerTurn to player1!");
    } else {
      console.log("testz - you got some cards!");
      //alert function tell player to pick again
    }
    setDeck(newDeck)
    setPlayerTurn(whoseTurn)
    setPlayerTwoHand(oldHand => [...oldHand, ...cardsSuccessfullyFished, ...goFishedCard]);
    setPlayerHand(opponentHandAfterBeingFished)
    checkForWinner()
  }

  // const checkForRequestedCards = number => {
  //   let handToCheck = playerHand

  //   const cardsSuccessfullyFished = handToCheck.filter(card => card.number == number);
  //   const opponentHandAfterBeingFished = handToCheck.filter(card => card.number !== number);

  //   return cardsSuccessfullyFished
  // }


  const goFish = () => {

  }


  const checkForWinner = () => {
    let checkPlayerOneHand = playerHand
    let checkPlayerTwoHand = playerTwoHand

    let playerOneHandRemainder = (playerHand.length % 4)
    let playerTwoHandRemainder = (playerHand.length % 4)
    console.log("testwin deck.length: " + (deck.length === 0));
    console.log("testwin playerOneHandRemainder: " + playerOneHandRemainder);
    console.log("testwin playerTwoHandRemainder: " + playerTwoHandRemainder);
    console.log("testwin checkPlayerOneHand[0].number: " + checkPlayerOneHand[0].number);

    if (deck.length === 0 && playerOneHandRemainder === 0 && playerTwoHandRemainder === 0) {
      let pOneScore = 0
      let pTwoScore = 0
      let completeBook = 0

      let lastpOneCard = checkPlayerOneHand[0].number
      let lastpTwoCard = checkPlayerTwoHand[0].number
      for (var x = 0; x <= checkPlayerOneHand.length; x++) {
          console.log("testwin x: " + x)
        if (lastpOneCard == checkPlayerOneHand[x].number) {
          completeBook++
          if (completeBook == 3) {
            pOneScore++
            console.log("testwin pOneScore: " + pOneScore)
            completeBook = 0
          }
        } else {
          completeBook = 0
        }
      }

    }
  }





  return (
    <>
      <PlayerHand 
        playerHand={playerHand}
        setPlayerHand={setPlayerHand}
        playerTwoHand={playerTwoHand}
        setPlayerTwoHand={setPlayerTwoHand}
        playerTurn={playerTurn}
        playerTookTurn={playerTookTurn}
        playerTwoTookTurn={playerTwoTookTurn}
      />
    </>
  )
};

export default Game;
