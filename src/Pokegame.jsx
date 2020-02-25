import React from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';
import { choice, remove } from './helpers';

function Pokegame({ cards }) {
  let hand1 = [], hand2 = [];
  let hand1exp = 0, hand2exp = 0;
  let pokeCards = cards;
  let turn = true;

  while (pokeCards.length > 0) {
    let randomCard = choice(pokeCards);
    if (turn === true) {
      hand1.push(randomCard);
      hand1exp += randomCard.base_experience;
    } else {
      hand2.push(randomCard);
      hand2exp += randomCard.base_experience;
    }
    pokeCards = remove(pokeCards, randomCard);
    turn = turn ? false : true;
  }

  const winner = hand1exp > hand2exp ? "hand1" : "hand2";

  return (
    <div className="Pokegame">
      <Pokedex key="1" winner={winner === "hand1" ? "winner" : "loser"} cards={hand1} />
      <Pokedex key="2" winner={winner === "hand2" ? "winner" : "loser"} cards={hand2} />
    </div>
  )
}

export default Pokegame;