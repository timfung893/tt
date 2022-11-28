import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';


function Hero(props) {
    // const [value, setValue] = useState('')
    const [headerHeight, setHeaderHeight] = useState('')
    // const onChange = (e) => {
    //     setValue(e.target.value)
    // }
    // const onSearch = (key) => {
    //     setValue(key)
    //     console.log('search', key);
    // }

    const setHeroTop =  () => {
        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');
        const headerHeight = header.offsetHeight;
        setHeaderHeight(headerHeight)
        hero.style.top =  '-' + headerHeight + 'px'
    }

    const showHeroHeading = () => {
        const hero = document.querySelector('.hero-heading')
        const hero2 = document.querySelector('.hero-heading-2')
        const hero3 = document.querySelector('.hero-heading-3')
        setTimeout(() => {
            hero.classList.add('show')
        }, 500);   
        setTimeout(() => {
            hero2.classList.add('show')
        }, 1000);   
        setTimeout(() => {
            hero3.classList.add('show')
        }, 2000);   
    }

    document.addEventListener('click', () => {
        document.getElementById('mungJungYan').play()
    }, { once: true } )

    useEffect(() => {
        showHeroHeading()
        setHeroTop()
        window.addEventListener('load', function() {
            setHeroTop()
        })
    },[headerHeight])
    
    return (
      <>    
        <section className="hero" id='home'>
            <ReactPlayer 
            id="bgVid"
            url='videos/bg.mp4'
            playing
            webkit-playsinline='true'
            playsinline={true}
            loop={true}
            volume={null}
            controls={null}
            muted={true}/>
            <audio controls autoPlay id='mungJungYan'>
                <source src="music/mjyan.mp3" type="audio/mpeg" />
            </audio>
            <div className="container hero-container">
                <h1 className='hero-heading'>
                    <label htmlFor="">Thịnh</label>
                </h1>
                <h1 className='hero-heading-2'>
                    <label htmlFor="">&</label>
                </h1>
                <h1 className='hero-heading-3'>
                <label htmlFor="">Thảo</label>
                </h1>
                <p>Save The Date</p>
            </div>
        </section> 
      </>
    );
}

export default Hero;