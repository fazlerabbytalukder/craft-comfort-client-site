import React, { useState } from 'react';
import { RiDashboardLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DashboardNav from '../../Shared/DashboardNav/DashboardNav';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const { admin } = useAuth();

    return (
        <div>
            {/* dashboard navbar design  */}
            <DashboardNav />
            {/* Dashboard pannel design  */}
            <div className='flex'>
                {/* sidebar section  */}
                <div className={`bg-primary dark:bg-main h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
                    <BsArrowLeftShort className={`bg-white text-primary dark:text-main text-3xl rounded-full absolute -right-3 top-9 border border-primary dark:border-main cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                    <Link to='/' className='inline-flex'>
                        <BiHome className={`bg-amber-300 text-3xl rounded cursor-pointer block float-left mr-2 duration-500 p-1 ${open && "rotate-[360deg]"}`} />
                        <h1 className={`text-white origin-left font-medium text-xl cursor-pointer duration-300 ${!open && "scale-0"} hover:text-main dark:hover:text-primary`}>Back Home</h1>
                    </Link>
                    <ul className='pt-2'>
                        <li>
                            <Link to='/dashboard' className='text-white text-sm- flex items-center gap-x-4 cursor-pointer p-2 hover:text-main dark:hover:text-primary rounded-md mt-2'>
                                <span><RiDashboardLine /></span>
                                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/myorder' className='text-white text-sm- flex items-center gap-x-4 cursor-pointer p-2 hover:text-main dark:hover:text-primary rounded-md mt-2'>
                                <span><AiOutlineShoppingCart /></span>
                                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>My Order</span>
                            </Link>
                        </li>
                        {
                            admin && <div>
                            <li>
                                <Link to='/dashboard/makeadmin' className='text-white text-sm- flex items-center gap-x-4 cursor-pointer p-2 hover:text-main dark:hover:text-primary rounded-md mt-2'>
                                    <span><RiAdminLine /></span>
                                    <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/manageall' className='text-white text-sm- flex items-center gap-x-4 cursor-pointer p-2 hover:text-main dark:hover:text-primary rounded-md mt-2'>
                                    <span><MdOutlineManageAccounts /></span>
                                    <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>Manage All</span>
                                </Link>
                            </li>
                            </div>
                        }
                    </ul>
                </div>
                {/* content section based on sidebar nav  */}
                <div className='p-7 bg-ternary dark:bg-[#0b1120fb] overflow-auto w-full text-primary dark:text-white'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;