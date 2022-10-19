import React from 'react';
import useAllUser from '../../../Hooks/useAllUser';
import useOrders from '../../../Hooks/useOrders';
import useProducts from '../../../Hooks/useProducts';
import { FiUsers } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
import { ImStatsBars } from 'react-icons/im';

const DashBoardHome = () => {
    const [furnitures] = useProducts();
    const [orderData] = useOrders();
    const [users] = useAllUser();
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-6 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div class="bg-[#009DA0] p-6 rounded">
                                <div className='flex justify-between items-center text-white'>
                                    <div>
                                        <FiUsers className='text-6xl' />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl font-semibold'>{users.length}</h1>
                                        <p>Users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div class="bg-[#0CC27E] p-6 rounded">
                                <div className='flex justify-between items-center text-white'>
                                    <div>
                                        <GiShoppingCart className='text-6xl' />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl font-semibold'>{furnitures.length}</h1>
                                        <p>Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 w-full p-4">
                            <div class="bg-[#FF586B] p-6 rounded">
                                <div className='flex justify-between items-center text-white'>
                                    <div>
                                        <ImStatsBars className='text-6xl' />
                                    </div>
                                    <div>
                                        <h1 className='text-3xl font-semibold'>{orderData.length}</h1>
                                        <p>Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashBoardHome;