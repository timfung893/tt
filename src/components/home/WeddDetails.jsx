import React from 'react';
import { useEffect } from 'react';
import Heading from '../common/Heading';


function WeddDetails(props) {
    const setCountDown = () => {
        const countDate = new Date('Dec 24, 2022, 18:00:00').getTime()
        const interval = setInterval(function() {
            const now = new Date().getTime()
            const distance = countDate - now
    
            // calculate days, hours, minutes, seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            
            document.querySelector('.countdown').innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s "
    
            if (distance < 0) {
                clearInterval(interval)
                document.querySelector('.countdown').innerHTML = 'Quẩy thôi anh em!'
            }
        }, 1000)
    }

    useEffect(() => {
        setCountDown()
    }, [])

    return (
        <>
            <section className="weddetails">
                <div className="overlay-bg"></div>
                <Heading title='Đám Cưới' desc=''/>
                <p className='message'>Buổi tiệc cưới sẽ diễn ra sớm hơn thông thường một chút - vào lúc 6 giờ tối. Mọi người chịu khó đến đúng giờ nhé!</p>
                <div className="wed-wrapper">
                    <div className="wed-info">
                        <div className="left">
                            <h2>Lúc</h2>
                            <p>24 tháng 12 2022, 6:00 PM</p>
                        </div>
                        <div className="img">
                            <img src="../images/hero/flower.webp" alt="" />
                        </div>
                        <div className="right">
                            <h2>Tại</h2>
                            <p>Pergola<br /> 
                            28A Trần Cao Vân, Phường 12, <br />
                            Phú Nhuận, Thành phố Hồ Chí Minh</p>
                        </div>
                    </div>
                </div>
                <div className="countdown">
                </div>
            </section>
        </>
    );
}

export default WeddDetails;