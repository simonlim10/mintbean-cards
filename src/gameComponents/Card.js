import React from "react";

const Card = props => {

  return (
    <div 
      onClick={()=>{props.playerTookTurn(props.card.number)}}
      className="w-12 h-18 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
    >
      <div className="bg-white px-4 py-2">
        {props.card.number}<br/>
        {props.card.suit}
      </div>
    </div>
  )
};

export default Card;
