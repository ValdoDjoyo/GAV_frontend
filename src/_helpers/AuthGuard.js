import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({children}) => {
    let logged = true
    if(!logged){
        return <Navigate to="/"/>
    }
    return children;
};

export default AuthGuard;