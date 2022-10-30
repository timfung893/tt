import React, { useEffect } from 'react';
import CardMain from './hero/CardMain';
import Hero from './hero/Hero';
import Blog from './blog/Blog';
import Gallery from './product/Gallery';
import Location from './Location';
import Story from './Story';
import WeddDetails from './WeddDetails';
import Celebrate from './Celebrate';

function Home(props) {
  return (
    <>
      <Hero />
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