import React from 'react';

const Search = ({searchName}) => {
    return (
        <div>
            <input type="text" onChange={searchName} />
        </div>
    );
};

export default Search;