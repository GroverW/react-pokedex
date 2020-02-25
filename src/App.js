import React from 'react';
import logo from './logo.svg';
import './App.css';
import cards from './cards';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <Pokegame cards={cards} />
    </div>
  );
}

export default App;
