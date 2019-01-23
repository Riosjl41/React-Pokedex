import React from 'react';

const PokeCard = ({pokemon}) => {
    return ( 
        <div className='bg-white dib br3 pa3 ma2 grow'>
            <div>
                <h2>Jane Doe</h2>
                {pokemon}
            </div>
        </div> 
    );
}
 
export default PokeCard;