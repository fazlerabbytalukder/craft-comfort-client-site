import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../images/sofa-1.png'
import image2 from '../../../images/sofa-2.png'

const Offer = () => {
    return (
        <div className='dark:bg-primary pb-6'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-6 mx-auto">
                    {/* item grid  */}
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2">
                        {/* single item  */}
                        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-1 bg-[#FBE3E4] p-6'>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-[#FD3D57] text-2xl font-semibold'>30% offer</h4>
                                <h3 className='text-primary text-2xl font-semibold'>Free Shipping</h3>
                                <p>Attractive Natural furniture</p>
                                <Link to="/products"><button className='px-2 py-1 lg:px-4 lg:py-2 mt-2 md:mt-3 lg:mt-4 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main'>SHOP NOW</button></Link>
                            </div>
                            <div>
                                <img className='w-full object-cover' src={image1} alt="" />
                            </div>
                        </div>
                        {/* single item  */}
                        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-1 bg-[#EDECEC] p-6'>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-[#FD3D57] text-2xl font-semibold'>50% offer</h4>
                                <h3 className='text-primary text-2xl font-semibold'>Flash Sale</h3>
                                <p>Attractive Natural furniture</p>
                                <Link to="/products"><button className='px-2 py-1 lg:px-4 lg:py-2 mt-2 md:mt-3 lg:mt-4 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main'>SHOP NOW</button></Link>
                            </div>
                            <div>
                                <img className='w-full object-cover' src={image2} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* item grid end */}
                </div>
            </section>
        </div>
    );
};

export default Offer;