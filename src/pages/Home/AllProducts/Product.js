import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { AiFillStar, AiOutlineStar,AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ furniture, handleAddToCart }) => {
    const { productName, category, price, img, review, reviewNumber } = furniture;

    return (
        <div>
            <div className="shadow-md dark:bg-[#0B1120] dark:shadow-lg">
                <div className="block relative h-50 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:bg-primary/10" src={img} />
                    <div className="img-top absolute top-2 right-2">
                        <div className="love-icon">
                            <GiSelfLove className='text-3xl text-yellow-400 bg-white p-1 rounded-full dark:text-primary' />
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-primary uppercase title-font text-lg font-semibold dark:text-white">{productName}</h2>
                    <p className="text-gray-800 capitalize text-sm dark:text-secondary">{category}</p>
                    <p className="mt-1 text-xl font-semibold text-primary dark:text-white">${price}</p>
                    <div className="review flex items-center">
                        <div className="flex items-center text-yellow-400">
                            <span>{review >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
                            <span>{review >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
                            <span>{review >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
                            <span>{review >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
                            <span>{review >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
                        </div>
                        <div className='ml-2'>
                            <p className='dark:text-secondary'>({reviewNumber})</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-primary text-white w-full py-2 rounded-b dark:bg-main' onClick={()=>handleAddToCart(furniture)}> <span className='flex justify-center items-center'><AiOutlineShoppingCart className='mr-2'/>Add To Cart</span> </button>
                </div>
            </div>
        </div>
    );
};

export default Product;