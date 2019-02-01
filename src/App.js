import React, { Component } from 'react';
import './App.module.css';
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
      <div className='tc'>
        <PokeList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;



