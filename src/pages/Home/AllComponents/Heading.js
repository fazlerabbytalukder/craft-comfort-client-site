import React from 'react';

const Heading = ({title,description}) => {
    return (
        <div className="container px-5 mx-auto py-7">
            <h1 className='text-4xl font-semibold text-primary uppercase dark:text-main'>{title}</h1>
            <p className='w-1/3 text-black/70 dark:text-white'>{description}</p>
        </div>
    );
};

export default Heading;