import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

//containers
import {
  About,
  Dashboard,
  Deposit,
  LandingPage,
  Login,
  Register
} from './containers';

//redux actions
import { init } from './redux/actions';

function App() {
  //initialize
  const dispatch = useDispatch();

  //redux state
  const token = useSelector(state => state.authReducer.token);

  useEffect(() => {
    dispatch(init());
  }, [])
  
  const authRoutes = (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  );

  const dashboardRoutes = (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/deposit' element={<Deposit />} />
      <Route path='*' element={<Navigate to={'/dashboard'} />} />
    </Routes>
  )
  return (
    !token ? dashboardRoutes : authRoutes
  );
}

export default App;
