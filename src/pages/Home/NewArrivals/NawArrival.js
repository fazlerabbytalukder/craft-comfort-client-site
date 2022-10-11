import React from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const NawArrival = ({ furniture }) => {
    const { _id, productName, category, price, img, review, reviewNumber } = furniture;

    const history = useNavigate();

    const handleProductClick = () => {
        history(`/furnitures/${_id}`);
    }

    return (
        <div>
            <div className="shadow dark:bg-[#0B1120] dark:shadow-lg">
                <div className="block relative h-50 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:bg-primary/10" src={img} />
                    <div className="img-top absolute top-2 right-2">
                        <div>
                            <button className='bg-green-800 px-3 py-1 text-sm rounded text-white'>New</button>
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
                    <button className="px-4 py-2 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main w-full"><span className='flex items-center justify-center cursor-pointer' onClick={handleProductClick}><BsEye className='mr-3' />Details</span></button>
                </div>
            </div>
        </div>
    );
};

export default NawArrival;