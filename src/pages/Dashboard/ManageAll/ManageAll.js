import React from 'react';

const ManageAll = () => {
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
                <tbody className='divide-y divide-primary'>
                    <tr className='text-center cursor-pointer'>
                        <td className='py-3 px-6 whitespace-nowrap'>Rabby</td>
                        <td className='py-3 px-6 whitespace-nowrap'>fazle@gmail.com</td>
                        <td className='py-3 px-6 whitespace-nowrap'>Furniture</td>
                        <td className='py-3 px-6 whitespace-nowrap'>Ststus</td>
                        <td className='py-3 px-6 whitespace-nowrap'>approve</td>
                        <td className='py-3 px-6 whitespace-nowrap'>delete</td>
                    </tr>
                    <tr className='text-center cursor-pointer'>
                        <td className='py-3 px-6 whitespace-nowrap'>Rabby</td>
                        <td className='py-3 px-6 whitespace-nowrap'>fazle@gmail.com</td>
                        <td className='py-3 px-6 whitespace-nowrap'>Furniture</td>
                        <td className='py-3 px-6 whitespace-nowrap'>Ststus</td>
                        <td className='py-3 px-6 whitespace-nowrap'>approve</td>
                        <td className='py-3 px-6 whitespace-nowrap'>delete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageAll;