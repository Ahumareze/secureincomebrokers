import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//containers
import {
  About,
  LandingPage,
  Login,
  Register
} from './containers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
