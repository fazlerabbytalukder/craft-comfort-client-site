import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/banner-2.jpg';

const OfferBanner = () => {
    return (
        <div className='dark:bg-navDark'>
            <div className='container px-5 mx-auto py-10'>
                <div className='max-h-[500px]'>
                    <div className='relative'>
                        <div className='absolute w-1/2 rounded-r-full  py-2.5 inset-y-0 bg-white border-2 border-ternary flex flex-col justify-center p-6'>
                            <div>
                                <p className='uppercase font-semibold'>online exclussive</p>
                                <h1 className='lg:text-5xl text-2xl font-bold uppercase text-[#FD3D57]'>15 % off</h1>
                                <h5 className='lg:block hidden'>accent chairs, <br />benches & ottomans</h5>
                                <Link to="/products"><button className="px-2 py-1 lg:px-4 lg:py-2 mt-2 md:mt-3 lg:mt-4 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main">SHOP NOW</button></Link>
                            </div>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;