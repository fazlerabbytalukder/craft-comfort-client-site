import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

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
        signInWithGoogle(location,navigate)
    }

    return (
        <>
            <h1>register</h1>
            {!isLoading && <form onSubmit={handleLoginSubmit}>
                <input type="text" name='name' placeholder='your name' onChange={handleOnChange} />
                            {/* <TextField
                                sx={{ width: "75%", m: 1 }}
                                name="name"
                                type="text"
                                onChange={handleOnChange}
                                label="Your name"
                                id="outlined-size-small"
                                size="small"
                            /> */}
                            <input type="email" name='email' placeholder='your email' onChange={handleOnChange} />
                            {/* <TextField
                                sx={{ width: "75%", m: 1 }}
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                label="Your Email"
                                id="outlined-size-small"
                                size="small"
                            /> */}
                            <input type="password" name='password' placeholder='your pass' onChange={handleOnChange} />
                            {/* <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="outlined-size-small"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                size="small" /> */}
                                <input type="password" name='password2' placeholder='re pass' onChange={handleOnChange} />
                            {/* <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="outlined-size-small"
                                label="Re-Type Your Password"
                                name="password2"
                                onChange={handleOnChange}
                                type="password"
                                size="small" /> */}
                            <button type="submit">Register</button> <br />
                            <button onClick={handleGoogleSignIn}>  Sign In With Google</button> <br />
                            <NavLink to='/login'><button>Already User? Please Login</button></NavLink>
                        </form>}
                        {isLoading && <div>loadign...</div>}
                    {user?.email && <div>user Created Successfully</div>}
            {authError && <div>{authError}</div>}
        </>
    );
};

export default Register;