import React, { useState, useEffect } from "react";

import Card from "./Card";


const PlayerHand = props => {

  return (
    <div className="player-hand text-right flex flex-row flex-nowrap">

      {props.playerHand.map(card => (
          <Card card={card} 
                className="w-32 h-44 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
          />
        ))
      }

    </div>
  )
};

export default PlayerHand;
