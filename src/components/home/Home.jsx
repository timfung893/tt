import React from 'react';
import Banner from './banner/Banner';
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
        <Card />
        <Product />
        <Banner />
        <TopProducts />
        <Blog />
        <Location />
      </>
    );
}

export default Home;