import React, { useEffect, useState } from 'react';
import { ImSpinner10 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";

const ManageAll = () => {
    const [orderData, setOrderData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [approveId, setApproveId] = useState('');

    // fetch all order 
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
                setIsLoading(false);
            });
    }, [approveId])

    //update data pending to approved
    const handleUpdate = (id) => {

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfull');
                    setApproveId(id);
                }
            })
    }


    //handle delete
    const handleDelete = (id) => {
        setApproveId(id);
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = orderData.filter(user => user._id !== id);
                        setOrderData(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }


    return (
        <div className='overflow-auto'>
            <table className='shadow-2xl border-2 border-primary dark:border-main w-full'>
                <thead className='bg-primary dark:bg-main text-white'>
                    <th className='py-3'>Name</th>
                    <th className='py-3'>Email</th>
                    <th className='py-3'>Furniture</th>
                    <th className='py-3'>Status</th>
                    <th className='py-3'>Approval</th>
                    <th className='py-3'>Action</th>
                </thead>

                {/* loading section  */}
                {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl text-center' /></div>}

                {/* table body  */}
                <tbody className='divide-y divide-primary dark:divide-main'>
                    {orderData.map((row) => (
                        <tr key={row._id} className='text-center cursor-pointer'>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.yourName}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.email}</td>
                            <td className='py-3 px-6 whitespace-nowrap flex flex-col'>{row.productInfo.map(product => {return(<p>{product.productName} - {product.quantity}</p>)})}</td>
                            <td className='py-3 px-6 whitespace-nowrap'>{row.status === "pending" ? <span className='bg-red-100 px-3 py-1 rounded-full dark:text-primary'>{row.status}</span> : <span className='bg-lime-100 px-3 py-1 rounded-full dark:text-primary'>{row.status}</span>}</td>
                            <td className="py-3 px-6 whitespace-nowrap"><button className={`bg-primary dark:bg-main text-white px-3 py-1 rounded ${row.status === "Shipped" && "opacity-50 cursor-not-allowed"}`} onClick={() => handleUpdate(row._id)}>{row.status === "pending" ? <span>Approve</span> : <span>Shipped</span>}</button></td>
                            <td className='py-3 px-6 whitespace-nowrap'><button onClick={() => handleDelete(row._id)}><BsTrash className='text-red-600' /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAll;