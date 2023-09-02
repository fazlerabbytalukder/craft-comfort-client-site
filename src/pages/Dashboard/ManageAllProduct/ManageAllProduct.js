import React, { useEffect, useState } from 'react';
import { ImSpinner10 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";

const ManageAllProduct = () => {
    const [furniture, setFurniture] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://craft-comfort-server-site.onrender.com/furnitures')
            .then(res => res.json())
            .then(data => {
                setFurniture(data)
                setIsLoading(false);
            });
    }, [])

    //handle delete
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://craft-comfort-server-site.onrender.com/furnitures/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingFurniture = furniture.filter(user => user._id !== id);
                        setFurniture(remainingFurniture);
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
                        <th className='py-3'>Action</th>
                    </thead>

                    {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl text-center' /></div>}

                    <tbody className='divide-y divide-primary dark:divide-main'>
                        {furniture.map((row) => (
                            <tr key={row._id} className='text-center cursor-pointer'>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.productName}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.price}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.category}</td>
                                <td><button onClick={() => handleDelete(row._id)}><BsTrash className='text-red-600' /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProduct;