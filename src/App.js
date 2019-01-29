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



