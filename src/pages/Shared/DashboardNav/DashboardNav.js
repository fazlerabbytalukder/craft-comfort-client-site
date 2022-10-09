import React from 'react';
import logo from '../../../images/furniture-logo.png';
import { BiSun } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import useDarkMood from '../../../Hooks/useDarkMood';

const DashboardNav = () => {
    const [colorTheme, setTheme] = useDarkMood();
    return (
        <div>
            {/* header section start */}
            <div className='w-full py-2 flex items-center justify-between px-12 bg-gray-100 dark:border-b dark:border-gray-800 dark:bg-navDark dark:text-secondary'>
                {/* logo */}
                <div className='flex justify-between items-center'>
                    <img className='w-9 mr-2' src={logo} alt="" />
                    <p className='text-sm font-semibold dark:text-ternary'>Craft <br /> Dashboard Pannel</p>
                </div>
                {/* icons */}
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center'>
                        <IoMdNotificationsOutline className='text-2xl mr-3 cursor-pointer' />
                        <HiOutlineMailOpen className='text-2xl mr-3 cursor-pointer' />
                        <BiUserCircle className='text-2xl mr-3 cursor-pointer' />
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
        </div>
    );
};

export default DashboardNav;