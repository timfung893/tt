import React from 'react';
import Card from './hero/Card';
import Hero from './hero/Hero';
import Product from './pages/product/Product';

function Home(props) {
    return (
      <>
        <Hero />
        <Card />
        <Product />
      </>
    );
}

export default Home;