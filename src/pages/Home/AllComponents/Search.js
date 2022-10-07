import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ searchName }) => {
    return (
        <div className='w-full max-w-md mb-6 md:mb-0 lg:mb-0'>
            <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <BsSearch className='w-5 h-5 absolute ml-3 pointer-events-none' />
                <input type="text" name='search' placeholder='Search Furniture' autoComplete='off' onChange={searchName} className="pr-3 pl-10 py-2 w-full max-w-full placeholder-gray-500 text-black rounded-sm border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" />
            </div>
        </div>
    );
};

export default Search;