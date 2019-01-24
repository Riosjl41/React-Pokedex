import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList';

class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[]
    }
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pokemon: response.results
        })
      })
    }

  render() {
    return (
      <div>
        <PokeList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;



