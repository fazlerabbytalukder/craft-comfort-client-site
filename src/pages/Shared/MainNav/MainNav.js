import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FiMenu } from "react-icons/fi"
import { BiSun } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useDarkMood from '../../../Hooks/useDarkMood';
import logo from '../../../images/furniture-logo.png';

const MainNav = ({ items }) => {
    const [open, setOpen] = useState(false);
    const { user, logout, admin } = useAuth();

    const [colorTheme, setTheme] = useDarkMood();
    return (
        <div>
            <div className='bg-gray-100 dark:border-b dark:border-gray-800 py-2 dark:bg-navDark dark:text-secondary'>
                <div className="flex items-center justify-between container mx-auto px-4 flex-wrap w-full">
                    <Link className='flex justify-between items-center cursor-pointer' to='/'>
                        <img className='w-9 mr-2' src={logo} alt="" />
                        <p className='text-sm font-semibold dark:text-ternary'>Craft <br /> With Comfort</p>
                    </Link>
                    <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />
                    <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                        <ul className='text-base text-gray-700 dark:text-secondary lg:flex lg:justify-between'>
                            {/* all links here  */}
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block lg:hover:bg-primary lg:hover:text-ternary lg:hover:rounded-md' to='/'><button>Home</button></Link>
                            </li>
                            {/* login user can only seen my orders  */}
                            {
                                user?.email && <>
                                    <li>
                                        <Link className='lg:px-5 py-2 font-semibold block lg:hover:bg-primary lg:hover:text-ternary lg:hover:rounded-md' to='/myorder'><button>My Orders</button></Link>
                                    </li>
                                </>
                            }
                            {/* admin can olny enter dashboard  */}
                            {
                                admin && (<li>
                                    <Link className='lg:px-5 py-2 font-semibold block lg:hover:bg-primary lg:hover:text-ternary lg:hover:rounded-md' to='/dashboard'><button>Dashboard</button></Link>
                                </li>)
                            }
                            <li>
                                <Link className='lg:px-5 py-2 font-semibold block lg:hover:bg-primary lg:hover:text-ternary lg:hover:rounded-md' to='/cartReview'>
                                    <div className='relative flex'>
                                        <AiOutlineShoppingCart className='flex-1 w-7 h-7 fill-current' />
                                        <span className='absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{items}</span>
                                    </div>
                                </Link>
                            </li>
                            {/* user based button show login or logout  */}
                            <li>
                                {
                                    user?.email ? <>
                                        <button className='lg:px-4 py-2 font-semibold block bg-primary text-ternary rounded-full lg:ml-2 text-center dark:bg-main w-full' onClick={logout}>Logout</button>
                                    </>
                                        :
                                        <NavLink className='lg:px-4 py-2 font-semibold block bg-primary text-ternary rounded-full lg:ml-2 text-center dark:bg-main w-full' to='/login'><button color="inherit">Login</button></NavLink>
                                }
                            </li>
                            {/* light mood dark mood work here  */}
                            <li className='flex justify-center items-center cursor-pointer'>
                                <span onClick={() => setTheme(colorTheme)}>
                                    {colorTheme === 'light' ? (
                                        <BiSun className=' dark:text-amber-400 text-2xl lg:ml-6' />)
                                        :
                                        (<MdOutlineDarkMode className='text-2xl lg:ml-6' />)
                                    }
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MainNav;