import React from 'react';
import Heading from '../common/Heading';


function WeddDetails(props) {
    return (
        <>
            <section className="weddetails">
                <div className="overlay-bg"></div>
                <Heading title='The Wed' desc=''/>
                <p className='message'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo dicta rem possimus atque assumenda!</p>
                <div className="wed-wrapper">
                    <div className="wed-info">
                        <div className="left">
                            <h2>When</h2>
                            <p>May 18, 2023, 7:00 PM</p>
                        </div>
                        <div className="img">
                            <img src="../images/hero/flower.webp" alt="" />
                        </div>
                        <div className="right">
                            <h2>Where</h2>
                            <p>White Chapel,<br /> 
                            500 Terry A Francois Blvd, <br />
                            San Francisco, CA 94158, USA</p>
                        </div>
                    </div>
                </div>
                <div className="countdown">
                    count
                </div>
            </section>
        </>
    );
}

export default WeddDetails;