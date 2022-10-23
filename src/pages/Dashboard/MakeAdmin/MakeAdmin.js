import React, { useEffect, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { ImSpinner10 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [approveId, setApproveId] = useState('');


    //fetch all user data
    useEffect(() => {
        setIsLoading(true);
        fetch('https://craft-comfort-server.onrender.com/allusers')
            .then(res => res.json())
            .then(data => {
                setUserData(data)
                setIsLoading(false);
            });
    }, [approveId])


    //take input data
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


    //handle admin submit
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://craft-comfort-server.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin successfully made');
                    setSuccess(true);
                }
                // console.log(data);
            });
        e.preventDefault();
    }


    //handle delete user
    const handleDelete = (id) => {
        setApproveId(id);
        const proceed = window.confirm('Are you sure, you want to delete User?');
        if (proceed) {
            const url = `https://craft-comfort-server.onrender.com/allusers/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUser = userData.filter(user => user._id !== id);
                        setUserData(remainingUser);
                    }
                });
        }
    }


    return (
        <div>
            {/* Form section  */}
            <form onSubmit={handleAdminSubmit} className="lg:flex lg:items-center mb-3 ">
                <input type="email" placeholder='Enter Email' onBlur={handleOnBlur} className=" bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button type='submit' className='px-4 py-2 font-semibold block bg-primary text-ternary text-center dark:bg-main'>Make Admin</button>
            </form>
            {/* success section  */}
            {success && (<div className='bg-green-700/60 py-3 rounded text-white flex items-center px-4 mb-4'>
                <p className='mr-3'><BsFillCheckCircleFill /></p>
                <p>Made Admin Successfully</p>
            </div>)}


            {/* table part  */}
            <div className='overflow-auto'>
                <table className='shadow-2xl border-2 border-primary dark:border-main w-full'>
                    <thead className='bg-primary dark:bg-main text-white'>
                        <th className='py-3'>Name</th>
                        <th className='py-3'>Email</th>
                        <th className='py-3'>Role</th>
                        <th className='py-3'>Action</th>
                    </thead>

                    {isLoading && <div className='flex justify-center items-center'><ImSpinner10 className='animate-spin text-5xl text-center' /></div>}

                    <tbody className='divide-y divide-primary dark:divide-main'>
                        {userData.map((row) => (
                            <tr key={row._id} className='text-center cursor-pointer'>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.displayName}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.email}</td>
                                <td className='py-3 px-6 whitespace-nowrap'>{row.role === 'admin' ? <span className='bg-lime-100 px-3 py-1 rounded-full dark:text-primary'>Admin</span> : <span className='bg-red-100 px-3 py-1 rounded-full dark:text-primary'>User</span>}</td>
                                <td><button onClick={() => handleDelete(row._id)}><BsTrash className='text-red-600' /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;