import React from 'react';
import Heading from '../AllComponents/Heading';
import image1 from '../../../images/g-5.jpg'
import image2 from '../../../images/g-6.jpg'
import image3 from '../../../images/g-3.jpg'
import image4 from '../../../images/g-4.jpg'
import image5 from '../../../images/g-1.jpg'
import image6 from '../../../images/g-8.jpg'

const UpcommingProducts = () => {
    return (
        <section class="text-gray-600 body-font pt-6 pb-12 dark:bg-navDark">
            <div class="container px-5 mx-auto flex flex-wrap">
                <Heading title="Upcomming Products" description="This is our upcomming products. Please Stay with us" />
                <div class="flex flex-wrap md:-m-2 -m-1">
                    {/* label 1 products  */}
                    <div class="flex flex-wrap w-1/2">
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-1/2">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Wooden luxury Divan</h1>
                                </div>
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={image1} />
                            </div>
                        </div>
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-1/2">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Chevron luxury Divan</h1>
                                </div>
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={image2} />
                            </div>
                        </div>
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-full">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Wooden dining table</h1>
                                </div>
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={image3} />
                            </div>
                        </div>
                    </div>
                    {/* label 2 products  */}
                    <div class="flex flex-wrap w-1/2">
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-full">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Wooden Wardrobe</h1>
                                </div>
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={image4} />
                            </div>
                        </div>
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-1/2">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Stool Cum Storage</h1>
                                </div>
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={image5} />
                            </div>
                        </div>
                        {/* single product  */}
                        <div class="md:p-2 p-1 w-1/2">
                            <div className='relative group'>
                                <div className='group-hover:absolute group-hover:w-full group-hover:inset-y-0 group-hover:bg-black/40 flex justify-center items-center duration-500'>
                                    <h1 className='group-hover:block hidden text-xl text-white'>Wooden Sofa</h1>
                                </div>
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={image6} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcommingProducts;