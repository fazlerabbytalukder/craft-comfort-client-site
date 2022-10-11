import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { ImSpinner10 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data)
                setIsLoading(false);
            });
    }, [])



    //handle delete
    const handleDelete = (id) => {
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
                        const remainingOrder = myOrder.filter(user => user._id !== id);
                        setMyOrder(remainingOrder);
                        // window.reload();
                    }
                });
        }
    }


    return (
        <div>
            {/* table part  */}
            <div className='overflow-auto'>
                <table className='shadow-2xl border-2 border-primary dark:border-main w-full'>
                    <thead className='bg-primary dark:bg-main text-white'>
                        <th className='py-3'>Product Name</th>
                        <th className='py-3'>Price</th>
                        <th className='py-3'>Category</th>
                        <th className='py-3'>Status</th>
                        <th className='py-3'>Action</th>
                    </thead>

                    {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl text-center' /></div>}

                    <tbody className='divide-y divide-primary dark:divide-main'>
                        {myOrder.map((row) => (
                            <tr key={row._id} className='text-center cursor-pointer'>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.furnitureName}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.price}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.category}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.status ==="pending" ? <span className='bg-red-100 px-3 py-1 rounded-full dark:text-primary'>Pending</span>:<span className='bg-lime-100 px-3 py-1 rounded-full dark:text-primary'>Shifted</span>}</td>
                                <td><button onClick={() => handleDelete(row._id)} className={`${row.status === "Shipped" && "opacity-50 cursor-not-allowed"}`}><BsTrash className='text-red-600' /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;