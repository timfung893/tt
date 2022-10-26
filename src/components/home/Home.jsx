import React from 'react';
import Banner from './banner/Banner';
import CardMain from './hero/CardMain';
import Card from './hero/Card';
import Hero from './hero/Hero';
import Blog from './blog/Blog';
import Product from './product/Product';
import TopProducts from './topProduct/TopProducts';
import Location from './Location';

function Home(props) {
    return (
      <>
        <Hero />
        <div className="bg">
          <CardMain />
          <Card />
          <Product />
          <Banner />
          <TopProducts />
          <Blog />
          <Location />
        </div>
      </>
    );
}

export default Home;