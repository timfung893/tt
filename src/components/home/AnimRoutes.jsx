import React from 'react';
import Home from './Home';
import Trips from './trips/Trips';
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence
      initial={true} 
      mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/tt' element={<Home/>}></Route>
        <Route path='/tt/trips' element={<Trips/>}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
