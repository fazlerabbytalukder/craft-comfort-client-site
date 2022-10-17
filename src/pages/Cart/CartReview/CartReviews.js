import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import useProducts from '../../../Hooks/useProducts';
import { removeFromDb } from '../../../utilities/fakedb';
import Cart from '../../Home/AllProducts/Cart';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import CartReview from './CartReview';

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

    useEffect(()=>{
        let q=0
        let t =0
        
        for (const furnitures of cart) {
            q = q + furnitures.quantity;
            t = t + furnitures.price * furnitures.quantity;
        }
        setQuantity(q)
        setTotal(t)
    
        // const name = cart.map(product => product.productName);
    
        setTax(parseFloat((t * 0.1).toFixed(2)));
    
      setGrandTotal(t + tax)
    },[cart])

    // console.log(cart);

    return (
        <div>
            <Navigation></Navigation>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className='w-full'>
                            {
                                cart.map(furniture => <CartReview
                                    key={furniture._id}
                                    furniture={furniture}
                                    handleRemoveProduct={handleRemoveProduct}
                                ></CartReview>)
                            }
                        </div>
                        <div className='w-full'>
                            <Cart cart={cart} total={total} grandTotal={grandTotal} tax={tax} quantity={quantity} >
                                <Link className='bg-primary text-white px-3 py-1' to='/checkout'>
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