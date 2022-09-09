import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const UserAuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/*' element={<Home />} />
        </Routes>
    );
};

export default UserAuthRouter;