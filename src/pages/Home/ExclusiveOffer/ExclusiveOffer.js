import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";

const ExclusiveOffer = () => {
    return (
        <div className='dark:bg-primary'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-6 mx-auto">
                    {/* item grid  */}
                    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-3">
                        {/* single item  */}
                        <div class="lg:p-4 md:p-2">
                            <div class="border-2 rounded-sm border-primary lpx-8 py-6 lg:px-8 lg:py-6 dark:border-main md:px-4 md:py-2">
                                <div className='flex items-center justify-around'>
                                    <div>
                                        <FaShippingFast className='text-5xl text-primary dark:text-main md:mr-2'/>
                                    </div>
                                    <div>
                                        <h3 className='text-primary font-semibold text-lg dark:text-main'>Free shipping</h3>
                                        <p className='text-sm dark:text-white'>Cost orders over $1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single item  */}
                        <div class="lg:p-4 md:p-2">
                            <div class="border-2 rounded-sm border-primary px-8 py-6 lg:px-8 lg:py-6 dark:border-main md:px-4 md:py-2 ">
                                <div className='flex items-center justify-around'>
                                    <div>
                                        <GiReceiveMoney className='text-5xl text-primary dark:text-main md:mr-2'/>
                                    </div>
                                    <div>
                                        <h3 className='text-primary font-semibold text-lg dark:text-main'>Cash Returns</h3>
                                        <p className='text-sm dark:text-white'>30 Days money return</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single item  */}
                        <div class="lg:p-4 md:p-2">
                            <div class="border-2 rounded-sm border-primary px-8 py-6 lg:px-8 lg:py-6 dark:border-main md:px-4 md:py-2 ">
                                <div className='flex items-center justify-around'>
                                    <div>
                                        <BsClockHistory className='text-5xl text-primary dark:text-main md:mr-2'/>
                                    </div>
                                    <div>
                                        <h3 className='text-primary font-semibold text-lg dark:text-main'>24/7 Support</h3>
                                        <p className='text-sm dark:text-white'>Customer Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* item grid end */}
                </div>
            </section>
        </div>
    );
};

export default ExclusiveOffer;