import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Home from '../Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Pages(props) {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                </Switch>
                <Footer />

            </Router>
        </>
    );
}

export default Pages;