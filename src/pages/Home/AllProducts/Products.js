import React, { useEffect, useState } from 'react';
import Heading from '../AllComponents/Heading';
import Product from './Product';


const Products = ({ title, description, reviewNumer, value }) => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/furnitures')
            .then(res => res.json())
            .then(data => {
                setFurnitures(data)
            });
    }, [])

    // console.log(furnitures);

    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
            <Heading title="Our Products" description="This is our products and here you find your desire furniture." />
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            furnitures.map(furniture => <Product key={furniture._id} furniture={furniture} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;