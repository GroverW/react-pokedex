import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex({ winner, cards }) {

  return (
    <div className="Pokedex">
      { cards.map((card, i) => <Pokecard key={i} card={card} />) }
      <div>
        {winner === "winner" ? "This hand wins" : ""}
      </div>
    </div>
  );
}

export default Pokedex;