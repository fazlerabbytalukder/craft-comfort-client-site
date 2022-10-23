import { useEffect, useState } from "react";

const useOrders = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('https://craft-comfort-server.onrender.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
            });
    }, [])

    return [orderData, setOrderData];
}

export default useOrders;