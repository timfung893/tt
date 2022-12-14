import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Home from '../Home';

function Pages({ data }) {
    return (
        <>
            <Header />
            <Home data={data} />
            <Footer />
        </>
    );
}

export default Pages;