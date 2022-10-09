import React, { useEffect, useState } from 'react';
import { ImSpinner10 } from "react-icons/im";

const ManageAll = () => {
    const [orderData, setOrderData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
                setIsLoading(false);
            });
    }, [])
    return (
        <div className='overflow-auto'>
            <table className='shadow-2xl border-2 border-primary w-full'>
                <thead className='bg-primary text-white'>
                    <th className='py-3'>Name</th>
                    <th className='py-3'>Email</th>
                    <th className='py-3'>Furniture</th>
                    <th className='py-3'>Status</th>
                    <th className='py-3'>Approval</th>
                    <th className='py-3'>Action</th>
                </thead>
                
                {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl text-center' /></div>}

                <tbody className='divide-y divide-primary'>
                    {orderData.map((row) => (
                        <tr key={row._id} className='text-center cursor-pointer'>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.yourName}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.email}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.furnitureName}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.status}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>approve</td>
                            <td className='py-3 px-6 whitespace-nowrap'>delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAll;