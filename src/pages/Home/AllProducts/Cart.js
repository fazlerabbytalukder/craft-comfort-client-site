import React from 'react';

const Cart = (props) => {
    const { total, quantity, grandTotal, tax } = props;
    return (
        <div className='border border-ternary h-full rounded'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto dark:text-white">
                    <h1 className='text-xl uppercase text-primary font-semibold mb-3 dark:text-white'>order summary</h1>
                    <div className='flex justify-between mb-1'>
                        <p className='text-primary font-semibold dark:text-white'>Total Furniture:</p>
                        <p>{quantity}</p>
                    </div>
                    <div className='flex justify-between mb-1'>
                        <p className='text-primary font-semibold dark:text-white'>Price:</p>
                        <p>${total}</p>
                    </div>
                    <div className='flex justify-between mb-1 border-b border-b-ternary'>
                        <p className='text-primary font-semibold dark:text-white'>Tax:</p>
                        <p>${tax}</p>
                    </div>
                    <div className='flex justify-between mt-2 mb-4'>
                        <p className='text-primary font-semibold dark:text-white'>Total Price:</p>
                        <p>${grandTotal}</p>
                    </div>
                    {props.children}
                </div>
            </section>
        </div>
    );
};

export default Cart;