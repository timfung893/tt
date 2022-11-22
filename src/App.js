import React, { useEffect } from 'react';
import Pages from './components/home/pages/Pages';
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
      <Pages />
    </>
  );
}

export default App;

