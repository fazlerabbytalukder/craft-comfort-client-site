import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import useAuth from '../../../Hooks/useAuth';
import Orders from './Orders';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const ProductDetails = () => {
    const { user } = useAuth();
    const [orderSuccess, setorderSuccess] = useState(false);

    const initialInfo = { yourName: user.displayName, email: user.email };
    const [orderInfo, setOrderInfo] = useState(initialInfo);


    const [singleProduct, setSingleProduct] = useState([]);
    const { furnitureId } = useParams();
    useEffect(() => {
        fetch(`https://craft-comfort-server.onrender.com/furnitures/${furnitureId}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));
    }, [furnitureId]);


    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    };

    const handleOrderSubmit = (e) => {
        const productOrder = {
            ...orderInfo,
            furnitureName: singleProduct.productName,
            price: singleProduct.price,
            img: singleProduct.img,
            category: singleProduct.category,
            status: "pending",
        };


        //send data to the server
        fetch("https://craft-comfort-server.onrender.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setorderSuccess(true);
                }
            });

        e.preventDefault();
    };


    return (
        <>
            <Navigation />
            <div className='bg-[#F8F9FC] dark:bg-[#0F172A]'>
                {/* product details section  */}
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-6 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct.img} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{singleProduct.category}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 uppercase dark:text-white">{singleProduct.productName}</h1>
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
                                <p className="leading-relaxed mb-5">{singleProduct.ProductDes}</p>
                                <div className="border-t-2">
                                    <span className="title-font font-medium text-3xl text-primary mt-4 dark:text-white pt-3">$ {singleProduct.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* order section  */}
                <Orders singleProduct={singleProduct} user={user} handleOrderSubmit={handleOrderSubmit} handleOnBlur={handleOnBlur} orderSuccess={orderSuccess} />
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;