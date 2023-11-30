import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Home from '../Home';
import { BrowserRouter as Router } from 'react-router-dom'
import AnimRoutes from '../AnimRoutes';

function Pages({ data }) {
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

export default Pages;