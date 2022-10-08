import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const AminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div>loading...</div>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}}/>
};

export default AminRoute;