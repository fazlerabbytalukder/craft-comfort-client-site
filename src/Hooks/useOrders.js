import { useEffect, useState } from "react";

const useOrders = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
            });
    }, [])

    return [orderData, setOrderData];
}

export default useOrders;