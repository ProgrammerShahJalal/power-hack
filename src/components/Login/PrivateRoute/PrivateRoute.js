import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='text-center h-96 flex justify-center'>
        <div><img className='w-48' src='https://i.ibb.co/ykXn5Tc/9844-loading-40-paperplane.gif' alt='loading animaiton'/>
        <p>Processing...</p>
        </div>
    </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;