import React, { Component } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';

class PokeList extends Component{
        state={
          url:'https://pokeapi.co/api/v2/pokemon/?limit=151',
          pokemon: null
        }

    async componentDidMount(){
          const res = await axios.get(this.state.url);
          this.setState({pokemon:res.data['results']})
      }

      render() {
        return (
          <React.Fragment>
          {this.state.pokemon ? (
            <div>
              {this.state.pokemon.map(pokemon=> (
              <PokeCard 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
              ))}
            </div>
          ):(
            <h1>Loading Pokemon</h1>
            )}
          </React.Fragment>
        );
      }
    }
 
export default PokeList;