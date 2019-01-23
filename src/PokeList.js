import React from 'react';
import PokeCard from './PokeCard';


const PokeList = (props) => {
    return ( 
    <div>
        <PokeCard pokemon={props.pokemon} />
    </div> );
}
 
export default PokeList;