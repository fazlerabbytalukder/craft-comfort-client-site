import React from 'react';

const Cart = (props) => {
    const { cart, total, quantity, grandTotal, tax } = props;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    {/* <p>names:{name}</p> */}
                    <p>cart lenght: {quantity}</p>
                    <p>Total Price:$ {total}</p>
                    <p>Tax:{tax}</p>
                    <p>Grand Total:{grandTotal?.toFixed(2)}</p>
                    {props.children}
                </div>
            </section>
        </div>
    );
};

export default Cart;