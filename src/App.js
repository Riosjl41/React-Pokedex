import React, { Component } from 'react';
import './App.css';
import PokeCard from './PokeCard';
import './PokeList';

class App extends Component {
  render() {
    return (
      <div>
        <PokeCard />
      </div>
    );
  }
}

export default App;
