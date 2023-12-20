import React, { useEffect } from 'react';
import Pages from './components/home/pages/Pages';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// import Home from '../Home';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimRoutes from './components/home/AnimRoutes';
import AOS from 'aos';
import './style/main.scss';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    delay: 50,
    once: true
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes/>
        <Footer />
      </Router>
    </>
  );
}

export default App;

