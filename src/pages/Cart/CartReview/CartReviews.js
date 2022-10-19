import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import { removeFromDb } from '../../../utilities/fakedb';
import Cart from '../../Home/AllProducts/Cart';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { BsTrash } from "react-icons/bs";

const CartReviews = () => {
    const [cart, setCart] = useCart();
    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleRemoveProduct = furniture => {
        const rest = cart.filter(pd => pd._id !== furniture._id);
        setCart(rest);
        removeFromDb(furniture._id);
    }

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
        setGrandTotal(t + tax);

    }, [cart])

    return (
        <div className='dark:bg-[#0B1120]'>
            <Navigation></Navigation>
            <section className="text-gray-600 body-font mt-5 pb-6">
                <div className="container px-5 mx-auto">
                    <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center items-start mx-auto">
                        <div className='flex-grow w-full'>
                            <div className='overflow-auto'>
                                <table className='shadow-2xl border-2 border-primary dark:border-main w-full'>
                                    <thead className='bg-primary dark:bg-main text-white'>
                                        <th className='py-3'>Image</th>
                                        <th className='py-3'>Name</th>
                                        <th className='py-3'>Quantity</th>
                                        <th className='py-3'>Price</th>
                                        <th className='py-3'>Action</th>
                                    </thead>
                                    {/* table body  */}
                                    <tbody className='divide-y divide-primary dark:divide-main'>
                                        {cart.map((row) => (
                                            <tr key={row._id} className='text-center cursor-pointer'>
                                                <td className='py-3 px-6 whitespace-nowrap w-1/12'><img src={row.img} alt="" /></td>
                                                <td className='py-3 px-6 whitespace-nowrap'>{row.productName}</td>
                                                <td className='py-3 px-6 whitespace-nowrap'>{row.quantity}</td>
                                                <td className='py-3 px-6 whitespace-nowrap'>{row.price}</td>
                                                <td><button className='bg-red-300 text-white p-2 rounded-full' onClick={() => handleRemoveProduct(row)}><BsTrash className='text-red-600' /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='flex-shrink-0 lg:mt-3'>
                            <Cart cart={cart} total={total} grandTotal={grandTotal} tax={tax} quantity={quantity} >
                                <Link className='bg-primary text-white px-3 py-1 rounded dark:bg-main' to='/checkout'>
                                    Proceed Checkout
                                </Link>
                            </Cart>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default CartReviews;