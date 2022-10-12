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

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);


    // page count part 
    useEffect(() => {
        fetch('http://localhost:5000/furnituresCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 8);
                setPageCount(pages)
            });
    }, [])

    // data fetch 
    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/furnitures?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFurnitures(data);
                setDisplayFurniture(data);
                setIsLoading(false);
            });
    }, [page, size])

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


            <div className='container px-5 mx-auto lg:flex lg:justify-between lg:items-center mb-8'>
                {/* search component  */}
                <Search searchName={searchName} />
                {/* filter component  */}
                <Filter filterContinent={filterContinent} />
            </div>


            {/* product container  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            displayFurniture.map(furniture => <Product key={furniture._id} furniture={furniture} />)
                        }
                    </div>
                    {/* pagination part  */}
                    <div className='flex items-center justify-end'>
                        <div className='space-x-2 mt-6'>
                            {
                                [...Array(pageCount).keys()].map(number => <button
                                    onClick={() => setPage(number)}
                                    className={`border border-[#FD3D57] px-4 py-1 font-bold dark:text-white ${page === number ? "bg-[#FD3D57]" : ""}`}
                                >{number}</button>)
                            }
                            <select className='border border-[#FD3D57] px-4 py-1 font-bold dark:text-white' onChange={e => setSize(e.target.value)}>
                                <option value="8" selected>8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                                <option value="14">14</option>
                            </select>
                        </div>
                    </div>
                    {/* pagination end  */}
                </div>
            </section>
            {/* product container end  */}
        </div>
    );
};

export default Products;