import React, { useState, useEffect } from "react";

import Card from "./Card";


const PlayerHand = props => {

  useEffect(() => {
    console.log("props.playerHand: " + JSON.stringify(props.playerHand))
    sortCardsInHand()
  }, [props.playerHand]);

  useEffect(() => {
    console.log("props.playerTwoHand: " + JSON.stringify(props.playerTwoHand))
    sortCardsInHand()
  }, [props.playerTwoHand]);

  let ranks = {
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7,
    9: 8,
    10: 9,
    J: 10,
    Q: 11,
    K: 12,
    A: 13
  }

  const sortCardsInHand = () => {
    const playerhand = props.playerHand.sort((left,right) => {
      return ranks[left.number] - ranks[right.number];
    });
    props.setPlayerHand(playerhand);
    const playerhandtwo = props.playerTwoHand.sort((left,right) => {
      return ranks[left.number] - ranks[right.number];
    });
    props.setPlayerTwoHand(playerhandtwo);
    console.log("props.playerHand RIGHT AFTER sort: " + JSON.stringify(props.playerHand))
    console.log("props.playerTwoHand RIGHT AFTER sort: " + JSON.stringify(props.playerTwoHand))
  };


  let content = "";


    content = (
      <>
      <div className="player-hand text-right flex flex-row flex-nowrap">
        player 1
        {props.playerHand.map((card, index) => (
            <Card card={card}
                  key={index}
                  playerTookTurn={props.playerTookTurn}
                  className="w-32 h-44 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
            />
          ))
        }

      </div>
      <div className="player-hand text-right flex flex-row flex-nowrap">
        player 2
        {props.playerTwoHand.map((card, index) => (
            <Card card={card}
                  key={index}
                  playerTookTurn={props.playerTwoTookTurn}
                  className="w-32 h-44 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
            />
          ))
        }

      </div>
      </>
    )

  return content;
}


export default PlayerHand;
