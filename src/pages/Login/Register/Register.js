import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import loginImg from '../../../images/login-sign-img.png';

const Register = () => {
    const [loginData, SetLoginData] = useState({})

    const navigate = useNavigate();
    const location = useLocation();

    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        // console.log(newLoginData);
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your pass did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        // alert('hello')
        e.preventDefault();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <>
            <section className="text-gray-600 body-font dark:bg-primary">
                <div className="container px-5 mx-auto flex flex-wrap items-center">
                    {/* form part */}
                    <div className="lg:w-2/6 md:w-1/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
                        <h2 className="text-gray-900 font-medium title-font mx-auto text-5xl mb-3 dark:text-ternary"><span className='text-bluShade dark:text-main'>Sign</span> Up</h2>
                        <p className='mx-auto mb-8'>Do not share your login information</p>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            {/* google sign up form part */}
                            <div className="relative mb-4 flex items-center">
                                <p className='mr-3 font-bold dark:text-ternary'>Sign up with</p>
                                <button onClick={handleGoogleSignIn} className='p-2 font-semibold block bg-primary text-ternary rounded-full text-center dark:bg-main'><FcGoogle className='text-2xl' /></button>
                            </div>
                            <div className="relative mb-4">
                                <div><hr className='text-primary' /></div>
                                <p className='text-center text-lg dark:text-ternary'>or</p>
                            </div>

                            {/* email pass sing up form part */}
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" name='name' placeholder='your name' onChange={handleOnChange} className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" name='email' placeholder='email' onChange={handleOnChange} className="w-full bg-formBg dark:bg-darkFormBg rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" name='password' placeholder='password' onChange={handleOnChange} className="w-full bg-formBg dark:bg-darkFormBg  rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" name='password2' placeholder='re pass' onChange={handleOnChange} className="w-full bg-formBg dark:bg-darkFormBg  rounded border border-gray-300 dark:border-navDark focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 dark:text-ternary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button type="submit" className="px-4 py-2 font-semibold block bg-primary text-ternary rounded text-center dark:bg-main w-full">Singup</button>

                            {/* go to sign in page */}
                            <NavLink to='/login'><button className='mt-2'>Already have an account? <span className='text-red-600'>Login</span></button></NavLink>
                        </form>}
                        {isLoading && <div className='mx-auto'><ImSpinner10 className='animate-spin text-4xl' /></div>}
                        {user?.email && <div>user Created Successfully</div>}
                        {authError && <div className='mx-auto'><ImSpinner10 className='animate-spin text-4xl' /></div>}
                    </div>

                    {/* image part */}
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <img className='mx-auto w-[650px]' src={loginImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;