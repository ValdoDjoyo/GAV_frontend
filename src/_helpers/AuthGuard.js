import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '../_services/account.services';

const AuthGuard = ({children}) => {
    let logged = accountService.isLogged()
    if(!logged){
        return <Navigate to="/"/>
    }
    return children;
};

export default AuthGuard;