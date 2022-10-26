import React from 'react';
import image from '../../../images/banner-1.jpg';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mx-w-[1640px] mx-auto '>
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='w-full absolute h-full max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <div className='container px-5 mx-auto'>
                        <h1 className='text-white md:text-2xl lg:text-3xl'>Best Collection For</h1>
                        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-main md:my-2 lg:my-3'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Home Decoration",
                                        "Office Decoration",
                                        "Shopping Mall Decoration"
                                    ]
                                }}
                            />
                        </h1>
                        <p className='hidden md:block lg:block w-1/2 my-2 text-black/70'>Craft with comfort is now considered as a well-known furniture brand in Bangladesh.</p>
                        <Link to="/products"><button className="px-2 py-1 lg:px-4 lg:py-2 mt-2 md:mt-3 lg:mt-4 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main">SHOP NOW</button></Link>
                    </div>
                </div>
                <img className='w-full max-h-[500px] object-cover' src={image} alt="" />
            </div>
        </div>

    );
};

export default Banner;