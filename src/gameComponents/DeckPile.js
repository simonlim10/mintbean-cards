import React from "react";

const DeckPile = props => {

  return (
    <div 
      className="w-12 h-18 rounded-lg shadow-md border-2 border-gray-300 overflow-hidden"
    >
      <div className="bg-white px-4 py-2 font-bold">
        {props.deck.length}
      </div>
    </div>
  )
};

export default DeckPile;
