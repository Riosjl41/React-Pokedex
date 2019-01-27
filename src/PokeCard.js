import React from 'react';

const PokeCard = ({pokemon}) => {
    return ( 
        pokemon.map(pokemon=>{
           return (
           <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.url}</p>
           </div>
           );
        })
    );
}
 
export default PokeCard;