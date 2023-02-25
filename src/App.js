import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//containers
import {
  About,
  Dashboard,
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
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
