import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Orders = ({ singleProduct, user, handleOrderSubmit, handleOnBlur, orderSuccess }) => {
    return (
        <section className='container px-5 mx-auto'>
            <h1 className='text-center text-4xl font-bold mb-10 dark:text-white'>Checkout Form</h1>
            {/* order details  */}
            <div className='grid grid-col-1 lg:grid-cols-2 md:grid-col-1 gap-10'>
                <div>
                    <div className='bg-gray-300 text-primary mb-4'>
                        <h2 className='text-center text-xl font-semibold py-1'>Your Order</h2>
                    </div>
                    <div className='border lg:mt-11 mt-0 px-4'>
                        <div className='border-b py-2 uppercase text-lg text-primary dark:text-white'>
                            <h1>Product/Personal Details</h1>
                        </div>
                        <p className='border-b py-4 capitalize dark:text-white'><span className='font-semibold uppercase'>Product Name:</span> {singleProduct.productName}</p>
                        <p className='border-b py-4 capitalize dark:text-white'><span className='font-semibold uppercase'>Your Name:</span> {user.displayName}</p>
                        <p className='border-b py-4 dark:text-white'><span className='font-semibold uppercase'>Your Email:</span> {user.email}</p>
                        <p className='border-b py-4 capitalize dark:text-white'><span className='font-semibold uppercase'>Price:</span> ${singleProduct.price}</p>
                    </div>
                </div>
                {/* billing details  */}
                <div>
                    <div className='bg-gray-300 text-primary mb-4'>
                        <h2 className='text-center text-xl font-semibold py-1'>Billing Details</h2>
                    </div>
                    <form onSubmit={handleOrderSubmit}>
                        <div className="relative mb-4">
                            <label for="country-region" className="leading-7 text-sm text-gray-600 dark:text-white">Country/Region</label>
                            <input type="text" name='country-region' required placeholder='Country/Region' className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} />
                        </div>
                        <div className="relative mb-4">
                            <label for="street-address" className="leading-7 text-sm text-gray-600 dark:text-white">Street Address</label>
                            <input type="text" name='street-address' placeholder='treet Address' required className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} />
                        </div>
                        <div className="relative mb-4">
                            <label for="town-city" className="leading-7 text-sm text-gray-600 dark:text-white">Town/City</label>
                            <input type="text" name='town-city' placeholder='Town/City' required className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} />
                        </div>
                        <div className="relative mb-4">
                            <label for="zip-code" className="leading-7 text-sm text-gray-600 dark:text-white">Zip Code</label>
                            <input type="text" name='zip-code' placeholder='Zip Code' required className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} />
                        </div>
                        <div className="relative mb-4">
                            <label for="phone" className="leading-7 text-sm text-gray-600 dark:text-white">Your Number</label>
                            <input type="text" name='phone' placeholder='Your Number' required className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onBlur={handleOnBlur} />
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
            </div>
        </section>
    );
};

export default Orders;