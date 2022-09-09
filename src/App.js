import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import UserAuthRouter from './pages/UserAuth/UserAuthRouter';
import AuthGuard from './_helpers/AuthGuard';
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
    {/* On dois vérifier si lutilisateur est connecté avant de le redirrigé avec authguard*/}
        <Route path='admin/*' element={
          <AuthGuard>
            <UserAuthRouter/>
          </AuthGuard>
        }/>
        <Route path='/*' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;