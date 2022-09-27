import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FiMenu } from "react-icons/fi"

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    return (
        <>
            <header className='border-b border-gray-300 py-2'>
                <div className="flex items-center justify-between container mx-auto px-4 flex-wrap w-full">
                    <div>Craft Comfort</div>
                    <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                        <ul className='text-base text-gray-700 lg:flex lg:justify-between'>
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block' to='/home'><button color="inherit">Home</button></Link>
                            </li>
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block' to='/home'><button color="inherit">Home</button></Link>
                            </li>
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block' to='/home'><button color="inherit">Home</button></Link>
                            </li>
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block' to='/home'><button color="inherit">Home</button></Link>
                            </li>
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block' to='/services'><button color="inherit">Services</button></Link>
                            </li>
                            <li>
                                {
                                    user?.email ? <>
                                        <div className='lg:flex justify-between items-center'>
                                            <button className='lg:px-5 py-2 font-semibold block'>{user?.displayName}</button>
                                            <button className='lg:px-5 py-2 font-semibold block' onClick={logout}>Logout</button>
                                        </div>
                                    </>
                                        :
                                        <NavLink className='lg:px-5 py-2 font-semibold block' to='/login'><button color="inherit">Login</button></NavLink>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navigation;