import React, { useEffect, useState } from 'react';
import Heading from '../AllComponents/Heading';
import Product from './Product';
import { ImSpinner10 } from "react-icons/im";
import Search from '../AllComponents/Search';
import Filter from '../AllComponents/Filter';


const Products = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [displayFurniture, setDisplayFurniture] = useState([]);
    const [categoryName, setCategoryName] = useState('all');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/furnitures')
            .then(res => res.json())
            .then(data => {
                setFurnitures(data);
                setDisplayFurniture(data);
                setIsLoading(false);
            });
    }, [])

    // filter section 
    const filterContinent = (e) => {
        setCategoryName(e.target.value);
    }
    useEffect(() => {
        if (categoryName === 'all') {
            setDisplayFurniture(furnitures);
            return;
        }
        setDisplayFurniture(furnitures.filter(furniture => furniture.category === categoryName))
    }, [categoryName])

    // search section 
    const searchName = (e) => {
        const name = e.target.value;
        const matchedNames = furnitures.filter(furniture => furniture.productName.toLowerCase().includes(name.toLowerCase()));
        setDisplayFurniture(matchedNames);
    }


    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
            {/* heading components  */}
            <Heading title="Our Products" description="This is our products and here you find your desire furniture." />
            {/* loading added if item not shown */}
            {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl' /></div>}
            

            {/* filter component  */}
            <Filter filterContinent={filterContinent} />
            {/* search component  */}
            <Search searchName={searchName} />


            {/* product container  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            displayFurniture.map(furniture => <Product key={furniture._id} furniture={furniture} />)
                        }
                    </div>
                </div>
            </section>
            {/* product container end  */}
        </div>
    );
};

export default Products;