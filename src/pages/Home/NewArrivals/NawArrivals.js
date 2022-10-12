import React, { useEffect, useState } from 'react';
import Heading from '../AllComponents/Heading';
import NawArrival from './NawArrival';
import { ImSpinner10 } from "react-icons/im";

const NawArrivals = () => {
    const [furniture, setFurniture] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/furnitures')
            .then(res => res.json())
            .then(data => {
                setFurniture(data);
                setIsLoading(false);
            });
    }, [])

    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
            {/* heading components  */}
            <Heading title="New Arrival" description="This is our new products and here you find all Latest Product" />

            {/* loading added if item not shown */}
            {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl' /></div>}

            {/* product container  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            furniture.slice(furniture.length - 4, furniture.length).map(furniture => <NawArrival key={furniture._id} furniture={furniture} />)
                        }
                    </div>
                </div>
            </section>
            {/* product container end  */}
        </div>
    );
};

export default NawArrivals;