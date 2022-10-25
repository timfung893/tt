import React from 'react';
import Banner from './banner/Banner';
import Card from './hero/Card';
import Hero from './hero/Hero';
import Product from './pages/product/Product';
import TopProducts from './topProduct/TopProducts';

function Home(props) {
    return (
      <>
        <Hero />
        <Card />
        <Product />
        <Banner />
        <TopProducts/>
      </>
    );
}

export default Home;