import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Home from '../Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Pages({ data }) {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/tt'>
                        <Home data={data} />
                    </Route>
                </Switch>
                <Footer />

            </Router>
        </>
    );
}

export default Pages;