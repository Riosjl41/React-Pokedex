import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
        <input 
            className='pa3 b--black ma5'
            type='search' 
            placeholder='Search Pokemon'
            onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;