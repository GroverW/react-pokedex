import React from 'react';
import './Pokecard.css';

function Pokecard({card}) {
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`
  
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{card.name}</h3>
      <img className="Pokecard-image" src={imgURL} alt={card.name} />
      <p className="Pokecard-type">Type: {card.type}</p>
      <p className="Pokecard-experience">EXP: {card.base_experience}</p>
    </div>
  );
}

export default Pokecard;

// {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},