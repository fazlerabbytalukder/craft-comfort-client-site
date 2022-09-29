import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/furniture-logo.png';
import { FiMapPin, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer class="text-gray-600 body-font dark:bg-navDark dark:border-t dark:border-gray-800">
            <div class="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <p class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className='w-9 mr-2' src={logo} alt="" />
                        <span className='text-sm font-semibold dark:text-ternary'>Craft <br /> With Comfort</span>
                    </p>
                    <p class="mt-2 text-sm text-gray-500">Craft with comfort is now considered as a well-known furniture brand in Bangladesh. With the utmost promise to provide the finest home and office furniture CWC started its journey in 2013.</p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="text-lg text-gray-900 font-semibold mb-3 dark:text-ternary">MY ACCOUNT</h2>
                        <nav class="list-none mb-2">
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Orders</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Wishlist</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Track Order</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Manage Account</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Return Order</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="text-lg text-gray-900 font-semibold mb-3 dark:text-ternary">INFORMATION</h2>
                        <nav class="list-none mb-2">
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">About Us</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Return Policy</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Terms & Condition</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Privacy Policy</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">FAQ</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="text-lg text-gray-900 font-semibold mb-3 dark:text-ternary">CUSTOMER SERVICE</h2>
                        <nav class="list-none mb-2">
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">24/7h Service</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Feedback</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Frist Response</Link>
                            </li>
                            <li className='mb-2'>
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">Delivary Info</Link>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="text-lg text-gray-900 font-semibold mb-3 dark:text-ternary">CONTACT</h2>
                        <nav class="list-none mb-2">
                            <li className='mb-2 flex justify-between items-top'>
                                <FiMapPin className='text-4xl mr-3' />
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">7895 Dr New Albuquerue, NM 19800, Dhaka, Bangladesh</Link>
                            </li>
                            <li className='mb-2 flex items-center'>
                                <FiPhone className='mr-3' />
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">+566 477 256</Link>
                            </li>
                            <li className='mb-2 flex items-center'>
                                <HiOutlineMail className='mr-3' />
                                <Link className="text-gray-600 hover:text-bluShade dark:hover:text-ternary" to="/home">info@domain.com</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 dark:bg-navDark dark:border-t dark:border-gray-800">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Craft Comfort —
                        <a href="https://www.linkedin.com/in/fazle-rabby-talukder/" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@fazlerabby</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500 hover:text-bluShade dark:hover:text-ternary" href='https://www.facebook.com/frtfazlerabby/'>
                            <FaFacebookF />
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-bluShade dark:hover:text-ternary" href='https://twitter.com/'>
                            <BsTwitter />
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-bluShade dark:hover:text-ternary" href='https://www.instagram.com/fazle.rabby.talukder/'>
                            <FaInstagram />
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-bluShade dark:hover:text-ternary" href='https://www.linkedin.com/in/fazle-rabby-talukder/'>
                            <AiFillLinkedin />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;