import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex({ cards }) {

  return (
    <div className="Pokedex">
      { cards.map((card, i) => <Pokecard key={i} card={card} />) }
    </div>
  );
}

export default Pokedex;