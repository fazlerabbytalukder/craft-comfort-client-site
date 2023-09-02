import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        // console.log(keys);
        fetch('https://craft-comfort-server-site.onrender.com/furnitureByKeys', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(furnitures => {
                for (const id in storedCart) {
                    const addedProduct = furnitures.find(furniture => furniture._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })

    }, [])

    return [cart, setCart];
}

export default useCart;