import React from 'react';

const Filter = ({filterContinent}) => {
    return (
        <div>
                <select class="form-select" aria-label="Default select example" onChange={filterContinent}>
                    <option selected>Select Your Category</option>
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