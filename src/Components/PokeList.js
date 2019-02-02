import React from 'react';
import PokeCard from './PokeCard';

const PokeList = (props) =>{
     
        return (
          <div>
          {props.pokemon ? (
            <div>
              {props.pokemon.map(pokemon=> (
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
          </div>
        );
      }
 
export default PokeList;