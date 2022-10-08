import React from 'react';
import useDarkMood from '../../../Hooks/useDarkMood';
import logo from '../../../images/furniture-logo.png';
import { BiSun } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMailOpen, HiOutlineUser } from "react-icons/hi";
import { BiUserCircle, BiMessageDetail } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { FiSettings } from "react-icons/fi";

const Dashboard = () => {
    const [colorTheme, setTheme] = useDarkMood();
    return (
        <div>
            {/* header section start */}
            <div className='w-full py-2 flex items-center justify-between px-12 bg-gray-100 dark:border-b dark:border-gray-800 dark:bg-navDark dark:text-secondary'>
                {/* logo */}
                <div className='flex justify-between items-center'>
                    <img className='w-9 mr-2' src={logo} alt="" />
                    <p className='text-sm font-semibold dark:text-ternary'>Craft <br /> Admin Pannel</p>
                </div>
                {/* icons */}
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center'>
                        <IoMdNotificationsOutline className='text-2xl mr-3 cursor-pointer' />
                        <HiOutlineMailOpen className='text-2xl mr-3 cursor-pointer' />
                        <BiUserCircle className='text-2xl mr-3 cursor-pointer'/>
                    </div>
                    
                    {/* dark and light mood  */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <span onClick={() => setTheme(colorTheme)}>
                            {colorTheme === 'light' ? (
                                <BiSun className=' dark:text-amber-400 text-2xl lg:ml-6' />)
                                :
                                (<MdOutlineDarkMode className='text-2xl lg:ml-6' />)
                            }
                        </span>
                    </div>
                </div>
            </div>
            {/* header section end */}



            {/* sidebar section start */}
            <div className='w-full min-h-[90vh] grid grid-col-12'>
                {/* sidebar nav section  */}
                <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
                    <div className='space-y-8 w-full'>
                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <RiDashboardLine />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Dashboard</h1>
                        </div>
                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <AiOutlineShoppingCart />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Market</h1>
                        </div>
                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <HiOutlineUser />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Portfolio</h1>
                        </div>
                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <BiMessageDetail />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>News</h1>
                        </div>

                        {/* divider start  */}
                        <div className='w-full border-t border-gray-200' />
                        {/* divider end  */}

                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <FiSettings />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Settings</h1>
                        </div>
                        <div className='w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent'>
                            <ImExit />
                            <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>Logout</h1>
                        </div>
                    </div>
                </nav>
                {/* sidebar content section  */}
                <div>

                </div>
            </div>
            {/* sidebar section end */}
        </div>
    );
};

export default Dashboard;