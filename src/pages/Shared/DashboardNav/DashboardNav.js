import React from 'react';
import logo from '../../../images/furniture-logo.png';
import { BiSun } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import useDarkMood from '../../../Hooks/useDarkMood';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    const [colorTheme, setTheme] = useDarkMood();
    return (
        <div>
            {/* header section start */}
            <div className='w-full py-2 flex items-center justify-between px-12 bg-gray-100 dark:border-b dark:border-gray-800 dark:bg-navDark dark:text-secondary'>
                {/* logo */}
                <Link className='flex justify-between items-center cursor-pointer' to='/'>
                    <img className='w-9 mr-2' src={logo} alt="" />
                    <p className='text-sm font-semibold dark:text-ternary'>Craft <br /> Dashboard Pannel</p>
                </Link>
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
            {/* header section end */}
        </div>
    );
};

export default DashboardNav;