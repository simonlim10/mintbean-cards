import React, { useState, useEffect } from "react";

import Card from "./Card";


const PlayerHand = props => {

  useEffect(() => {
    console.log("props.playerHand: " + JSON.stringify(props.playerHand))
    sortCardsInHand()
  }, [props.playerHand]);

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
    console.log("props.playerHand RIGHT AFTER sort: " + JSON.stringify(props.playerHand))
  };


  return (
    <div className="player-hand text-right flex flex-row flex-nowrap">

      {props.playerHand.map(card => (
          <Card card={card}
                playerTookTurn={props.playerTookTurn}
                className="w-32 h-44 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
          />
        ))
      }

    </div>
  )
};

export default PlayerHand;
