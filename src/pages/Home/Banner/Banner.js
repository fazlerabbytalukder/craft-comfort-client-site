import React from 'react';
import image from '../../../images/banner-1.jpg';

const Banner = () => {
    return (
        // <div className='bg-fuchsia-200'>
        //     <section class="text-gray-600 body-font">
        //         <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        //             <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        //                 <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out readymade gluten
        //                 </h1>
        //                 <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        //                 <div class="flex justify-center">
        //                     <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        //                     <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        //                 </div>
        //             </div>
        //             <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        //                 <img class="object-cover object-center rounded" alt="hero" src={image}/>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div className='mx-w-[1640px] mx-auto '>
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='w-full absolute h-full max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <div className='container px-5 mx-auto'>
                        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white'>Best Collection For</h1>
                        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold'>Home Decoration</h1>
                        <p className='hidden md:block lg:block'>Craft with comfort is now considered as a well-known furniture brand in Bangladesh.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <img className='w-full max-h-[500px] object-cover' src={image} alt="" />
            </div>
        </div>

    );
};

export default Banner;