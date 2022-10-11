import React from 'react';

const Filter = ({ filterContinent }) => {
    return (
        <div className='w-full max-w-md'>
            <select className='py-2 px-2 placeholder-gray-500 text-black border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 w-full max-w-full' onChange={filterContinent}>
                <option value="all">All</option>
                <option value="Lounges & Sofa">Lounges & Sofa</option>
                <option value="outdoor">outdoor</option>
                <option value="office">office</option>
                <option value="mattresses">mattresses</option>
                <option value="beadroom">beadroom</option>
                <option value="living & dining">living & dining</option>
            </select>
        </div>
    );
};

export default Filter;