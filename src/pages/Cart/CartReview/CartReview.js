import React from 'react';
// import { BsTrash } from 'react-icons/bs';

const CartReview = (props) => {
    const { furniture, handleRemoveProduct } = props;
    const { productName, price, quantity, img, category } = props.furniture;
    return (
        <div className='space-y-4 w-full'>
            <div className='border border-primary'>
                <div className='flex items-center justify-between'>
                    <div>
                        <img className='w-10' src={img} alt="" />
                    </div>
                    <div>
                        <p>{productName}</p>
                        <p>Category: {category}</p>
                        <p>Price: {price}</p>
                        <p>Quantity:{quantity}</p>
                    </div>
                    <div>
                        <button className='bg-red-300 text-white p-2 rounded-full'
                            onClick={()=>handleRemoveProduct(furniture)}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartReview;