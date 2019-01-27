import React, { Component } from 'react';
import './App.css';
import PokeList from './PokeList';

class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[],
      urls:[],
      abilities:[]
    }
  }

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          pokemon: response.results,
          urls:[...response.results.map(pokemon=>pokemon.url)]
        })
      })
      .then(this.state.urls.map(url=>
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({abilities:data.abilities[0].ability.name}))
        )
        )
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



