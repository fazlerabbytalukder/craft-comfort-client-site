import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // alert('hello')
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location,navigate)
    }
    return (
        <div>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" name='email' placeholder='email' onChange={handleOnChange} />
                        {/* <TextField
                            sx={{ width: "75%", m: 1 }}
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            id="outlined-size-small"
                            size="small"
                        /> */}
                        <input type="password" name='password' placeholder='email' onChange={handleOnChange} />
                        {/* <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-size-small"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            size="small" /> */}
                        <button type="submit">Login</button> 
                        <button onClick={handleGoogleSignIn}>  Sign In With Google</button> <br />
                        <NavLink to='/register'><button>New User? Please Register</button></NavLink>
                    </form>
                    {isLoading && <div>loadign...</div>}
                    {user?.email && <div>user Created Successfully</div>}
            {authError && <div>{authError}</div>}
            </div>
    );
};

export default Login;