import React, { Component } from 'react';
import './App.css';
import PokeList from '../Components/PokeList';
import SearchBox from '../Components/SearchBox';

class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[],
      urls:[],
      abilities:[],
      searchfield: ''
    }
  }

  componentDidMount(){
   
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
  }

  render() {
    const {pokemon, searchfield} = this.state;
    const filterPoke = pokemon.filter(poke =>{
      return poke.name.toLowerCase().includes(searchfield.toLowerCase());
      }) 
    return (
      <div className='tc'>
        <h1 className='f-headline lh-solid'>Pokedex</h1>
        <SearchBox />
        <PokeList pokemon={filterPoke} />
      </div>
    );
  }
}

export default App;



