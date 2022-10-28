import React from 'react';

function CardMain(props) {
    return (
        <>
            <section className="cardmain" id='ourstory'>
                <p className='card-story'>Our Story</p>
            
                <div className="container card-container">
                    <div className="left">
                        <img src="../images/blog/b1.jpg" alt="" />
                        <div className="name">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className="center">
                        <img className='center-img' src="../images/hero/fl-frame.jpg" alt="" />
                        <p>We'll seal the deal!</p> 
                    </div>
                    <div className="right">
                    <img src="../images/blog/b2.jpg" alt="" />
                        <div className="name">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card-icon">
                <hr className='end' />
                <p>XOXO</p>
            </div>
        </>
    );
}

export default CardMain;