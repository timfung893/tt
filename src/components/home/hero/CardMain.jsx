import React from 'react';

function CardMain(props) {
    return (
        <>
            <section className="cardmain">
                <p className='card-story'>We invite you to our day</p>

                <div className="container card-container">
                    <div className="left">
                        <img src="../images/hero/cate-h11_5.png" alt="" />
                        <div className="name">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className="center">
                        <img className='center-img' src="../images/hero/fl-frame.jpg" alt="" />
                        <p>XXXXXXXXX</p> 
                    </div>
                    <div className="right">
                    <img src="../images/hero/cate-h11_5.png" alt="" />
                        <div className="name">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
                <img className='center-img-divider' src="../images/hero/divider.png" alt="" />
            </section>
        </>
    );
}

export default CardMain;