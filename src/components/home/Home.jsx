import React, { useEffect } from 'react';
import CardMain from './hero/CardMain';
import Hero from './hero/Hero';
import Gallery from './product/Gallery';
import Location from './Location';
import Story from './Story';
import WeddDetails from './WeddDetails';
import Celebrate from './Celebrate';

function Home({data}) {
  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    const cardSection = document.querySelector('.card-section')
    if (ios === true && window.innerWidth < 544) {
      cardSection.classList.add('scroll')
    }
  })
  return (
    <>
      <Hero headerHeight={data}/>
      <div className="bg">
        <CardMain/>
        <Story />
        <WeddDetails/>
        <Gallery />
        <Location />
        <Celebrate />
      </div>
    </>
  );
}

export default Home;