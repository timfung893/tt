import React from 'react';
import Banner from './banner/Banner';
import CardMain from './hero/CardMain';
import Card from './hero/Card';
import Hero from './hero/Hero';
import Blog from './blog/Blog';
import Product from './product/Product';
import TopProducts from './topProduct/TopProducts';
import Location from './Location';
import Gallery from './Gallery';
import WeddDetails from './WeddDetails';

function Home(props) {
    return (
      <>
        <Hero />
        <div className="bg">
          <CardMain />
          <Gallery />
          <Product />
          <WeddDetails/>
          <Blog />
          <Location />
        </div>
      </>
    );
}

export default Home;