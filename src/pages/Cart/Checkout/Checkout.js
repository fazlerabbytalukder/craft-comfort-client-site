import React, { useState,useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useCart from '../../../Hooks/useCart';
import Cart from '../../Home/AllProducts/Cart';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Checkout = () => {
    // const [order, setOrder] = useState([]);
    const { user } = useAuth();
    const [cart, setCart] = useCart();
    const [orderSuccess, setorderSuccess] = useState(false);
    const [total, setTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [quantity, setQuantity] = useState(0);
    console.log('cart data',cart)

    const yourName = user.displayName;
    const email = user.email;

    const initialInfo = { yourName, email};

    const [orderInfo, setOrderInfo] = useState(initialInfo);

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


    const handleOrderSubmit = (e) => {
        const productOrder = {
            ...orderInfo,
            productInfo:cart,
            total: total,
            grandTotal: grandTotal,
            tax: tax,
            quantity:quantity,
            status: "pending",
        };
        // console.log(productOrder);

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
        <div>
            <Navigation/>
            <div>
                <div></div>
                <div>
                    <Cart cart={cart} total={total} grandTotal={grandTotal} tax={tax} quantity={quantity}/>
                </div>
            </div>
            <div>
                <form onSubmit={handleOrderSubmit}>
                    <button type='submit'>sumbit</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Checkout;