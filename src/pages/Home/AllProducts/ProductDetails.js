import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { furnitureId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/furnitures/${furnitureId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, [furnitureId]);


    return (
        <div className='bg-[#F8F9FC] dark:bg-[#0F172A]'>
            <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct.img} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{singleProduct.category}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 uppercase dark:text-white">{singleProduct.productName}</h1>
                        <div className="review flex items-center mb-2">
                            <div className="flex items-center text-yellow-400">
                                <span>{singleProduct.review >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
                                <span>{singleProduct.review >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
                                <span>{singleProduct.review >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
                                <span>{singleProduct.review >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
                                <span>{singleProduct.review >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
                            </div>
                            <div className='ml-2'>
                                <p className='dark:text-secondary'>{singleProduct.reviewNumber} Rewiews</p>
                            </div>
                        </div>
                        <p class="leading-relaxed mb-5">{singleProduct.ProductDes}</p>
                        <div class="flex border-t-2">
                            <span class="title-font font-medium text-3xl text-primary mt-4 dark:text-white">$ {singleProduct.price}</span>
                            <button class="flex ml-auto border-0 py-2 px-6 focus:outline-none rounded font-semibold bg-primary text-ternary text-center dark:bg-main mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default ProductDetails;