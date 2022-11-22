import React from 'react';

function CardMain(props) {
    return (
        <>
            <section className="cardmain card-section" id='ourstory' data-aos="fade">
                <p className='card-story'>Sau 2 năm, 11 tháng, 27 ngày...</p>
                <div className="container card-container">
                    <div className="left">
                        <img src="images/banner/thao.jpg" alt="" />
                        <div className="name">
                            <h2>Phương Thảo</h2>
                            <p>2x tuổi (x đại học)</p>
                            <p>Mê Vương Phi, Vương Gia Vệ</p>
                            <p>Nhưng đồ ăn tới là mọi thứ mặc kệ</p>
                        </div>
                    </div>
                    <div className="center">
                        <img className='center-img' src="images/hero/fl-frame.jpg" alt="" />
                        <p>Cuối cùng <br></br>cũng chốt kèo :)</p> 
                    </div>
                    <div className="right">
                    <img src="images/banner/thinh2.jpg" alt="" />
                        <div className="name">
                            <h2>Trường Thịnh</h2>
                            <p>2x tuổi (x đại học)</p>
                            <p>Mê em</p>
                            <p>Nhưng mê xe, mê game hơn cả keke</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card-icon">
                <hr className='end' />
                <p>xoxo</p>
            </div>
        </>
    );
}

export default CardMain;