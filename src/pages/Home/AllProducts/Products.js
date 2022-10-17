import React, { useEffect, useState } from 'react';
import useCart from '../../../Hooks/useCart';
import { addToDb } from '../../../utilities/fakedb';
import Heading from '../AllComponents/Heading';
import Product from './Product';


const Products = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [cart, setCart] = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(8);

    useEffect(() => {
        fetch('http://localhost:5000/furnituresCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 8);
                setPageCount(pages)
            });
    }, [])


    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/furnitures?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setFurnitures(data);
                // setDisplayFurniture(data);
                setIsLoading(false);
            });
    }, [page, size])


    const handleAddToCart = (selectedFurnitures) => {
        let newCart = [];
        const exist = cart.find(furniture => furniture._id === selectedFurnitures.id);
        if (!exist) {
            selectedFurnitures.quantity = 1;
            newCart = [...cart, selectedFurnitures];
        } else {
            const rest = cart.filter(furniture => furniture._id !== selectedFurnitures.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedFurnitures._id);
    }


    return (
        <div className="dark:bg-[#0F172A] pb-6">
            {/* heading components  */}
            <Heading title="Our Products" description="This is Our products and here you find all Products" />
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                        {
                            furnitures.map(furniture => <Product key={furniture._id} furniture={furniture} handleAddToCart={handleAddToCart}/>)
                        }
                    </div>
                    <div className='flex items-center justify-end'>
                            <div className='space-x-2 mt-6'>
                                {
                                    [...Array(pageCount).keys()].map(number => <button
                                        onClick={() => setPage(number)}
                                        className={`border border-[#FD3D57] px-4 py-1 font-bold dark:text-white ${page === number ? "bg-[#FD3D57]" : ""}`}
                                    >{number + 1}</button>)
                                }
                                <select className='border border-[#FD3D57] px-4 py-1 font-bold dark:text-white dark:bg-primary dark:border-[#FD3D57]' onChange={e => setSize(e.target.value)}>
                                    <option value="8" selected>8</option>
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="14">14</option>
                                </select>
                            </div>
                        </div>
                </div>
            </section>

            {/* 
            <div className='bg-[#F8F9FC] dark:bg-[#0F172A] pb-8'>
                <Heading title="Our Products" description="This is our products and here you find your desire furniture." />
                {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl' /></div>}


                <div className='container px-5 mx-auto lg:flex lg:justify-between lg:items-center mb-8'>
                    <Search searchName={searchName} />
                    <Filter filterContinent={filterContinent} />
                </div>



                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                            {
                                displayFurniture.map(furniture => <Product key={furniture._id} furniture={furniture} />)
                            }
                        </div>

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

                    </div>
                </section>

            </div> */}
        </div>
    );
};

export default Products;