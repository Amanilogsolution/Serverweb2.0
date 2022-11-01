import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = sessionStorage.getItem('Token');
    return (
        auth ? <Outlet /> : <Navigate to="./Signin" />
    )
}

export default PrivateRoutes;