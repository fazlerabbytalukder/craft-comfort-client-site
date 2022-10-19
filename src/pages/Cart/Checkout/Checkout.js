import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useCart from '../../../Hooks/useCart';
import Cart from '../../Home/AllProducts/Cart';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Checkout = () => {
    const { user } = useAuth();
    const [cart] = useCart();
    const [orderSuccess, setorderSuccess] = useState(false);
    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const yourName = user.displayName;
    const email = user.email;
    const initialInfo = { yourName, email };
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    useEffect(() => {
        let q = 0
        let t = 0

        for (const furnitures of cart) {
            q = q + furnitures.quantity;
            t = t + furnitures.price * furnitures.quantity;
        }
        setQuantity(q)
        setTotal(t)
        setTax(parseFloat((t * 0.1).toFixed(2)));
        setGrandTotal(t + tax)
    }, [cart])

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    };


    const handleOrderSubmit = (e) => {
        const productOrder = {
            ...orderInfo,
            productInfo: cart,
            total: total,
            grandTotal: grandTotal,
            tax: tax,
            quantity: quantity,
            status: "pending",
        };

        // send data to the serer
        fetch("http://localhost:5000/orders", {
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
        <div className='dark:bg-[#0B1120]'>
            <Navigation />
            <section className='container px-5 mx-auto'>
                <div className='flex w-full flex-col gap-8 sm:flex-row sm:items-center items-start mx-auto'>
                    <div className='flex-grow w-full'>
                    <h1 className='text-center text-4xl font-bold mt-3 dark:text-white'>Checkout Form</h1>
                        <form onSubmit={handleOrderSubmit}>
                            <div className="relative mb-4">
                                <label for="street-address" className="leading-7 text-sm text-gray-600 dark:text-white">Street Address</label>
                                <input type="text" name='street-address' placeholder='treet Address' required autocomplete="off" className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleOnBlur} />
                            </div>
                            <div className="relative mb-4">
                                <label for="town-city" className="leading-7 text-sm text-gray-600 dark:text-white">Town/City</label>
                                <input type="text" name='town-city' placeholder='Town/City' required autocomplete="off" className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleOnBlur} />
                            </div>
                            <div className="relative mb-4">
                                <label for="zip-code" className="leading-7 text-sm text-gray-600 dark:text-white">Zip Code</label>
                                <input type="text" name='zip-code' placeholder='Zip Code' required autocomplete="off" className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleOnBlur} />
                            </div>
                            <div className="relative mb-4">
                                <label for="phone" className="leading-7 text-sm text-gray-600 dark:text-white">Your Number</label>
                                <input type="text" name='phone' placeholder='Your Number' required autocomplete="off" className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleOnBlur} />
                            </div>
                            {
                                orderSuccess && (
                                    <div className='bg-green-700/60 py-3 rounded text-white flex items-center px-4 mb-4'>
                                        <p className='mr-3'><BsFillCheckCircleFill /></p>
                                        <p>Success order</p>
                                    </div>
                                )
                            }
                            <div className="relative mb-4">
                                <button className='px-5 py-2 font-semibold bg-primary text-ternary rounded-md dark:bg-main' type="submit">Order Now</button>
                            </div>
                        </form>
                    </div>
                    {/* cart section  */}
                    <div className='flex-shrink-0 lg:mt-3'>
                        <Cart cart={cart} total={total} grandTotal={grandTotal} tax={tax} quantity={quantity} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Checkout;