import React, { Component } from 'react';
import './App.css';
import PokeList from '../Components/PokeList';
import SearchBox from '../Components/SearchBox';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state={
      url:'https://pokeapi.co/api/v2/pokemon/?limit=151',
      pokemon: [],
      names:[],
      searchfield: ''
    }
  }

  async componentDidMount(){
    const res = await axios.get(this.state.url);
    this.setState({pokemon:res.data['results']})
}

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
  }

  render() {
    const {pokemon, searchfield} = this.state;
    const filteredPoke = pokemon.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }) 
    return (
      <div className='tc'>
        <h1 className='f-headline lh-solid'>Pokedex</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <PokeList 
        pokemon={filteredPoke}
        url={this.state.url} />
      </div>
    );
  }
}

export default App;



