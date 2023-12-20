import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import logo from '../assets/images/icon.png';
import { connect, useDispatch, useSelector } from 'react-redux';

function Header(props) {
    window.addEventListener('scroll', function (e) {
        const header = document.querySelector('.header')
        const hero = document.querySelector('.hero')
        const story = document.querySelector('.cardmain')
        // const rect = story.getBoundingClientRect()
        // const isInViewPort = rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        header.classList.toggle('active', this.window.scrollY > 70)
        if (hero && hero.length) {
            hero.classList.toggle('is-trans', this.window.scrollY > 70)
        }
        if (story && story.length) {
            story.classList.toggle('active', this.window.scrollY > 70)
        }

        // if (isInViewPort && this.window.scrollY < 70) {
        //     story.scrollIntoView()    
        // }

    })

    function scrollToSection(id, sectionId) {
        $(id).click(() => {
            $("html, body").animate(
              {
                scrollTop: $(sectionId).offset().top,
              },
              1000
            );
            setMobile(false);
        });
    }

    const scrollOnClick = () => {
        scrollToSection(".home", "#home");
        scrollToSection(".ourstory", "#ourstory");
        scrollToSection(".link.gallery", "#gallery");
        scrollToSection(".location", "#location");
    };

    // set state for mobile menu
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        scrollOnClick()
    },[])

    return (
       <header className='header'>
            <div className="container">
                <nav className='menu-wrapper'>
                    <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                            <div className={mobile ? 'bar one active' : 'bar one'}></div>
                            <div className={mobile ? 'bar two active' : 'bar two'}></div>
                            <div className={mobile ? 'bar three active' : 'bar three'}></div>
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className={mobile ? 'center open' : 'center'}>
                        <ul className={mobile ? 'mobile-nav' : 'menu'}>
                            <li>
                                <a href='#home' className='link home'>home</a>
                            </li>
                            <li>
                                <a href='#ourstory' className='link ourstory'>chủ xị</a>
                            </li>
                            <li>
                                <a href='#gallery' className='link gallery'>ảnh</a>
                            </li>
                            <li>
                                <a href='#location' className='link location'>địa điểm</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
       </header>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        amount: state.amount
    }
}
connect(mapStateToProps)(Header)


export default Header;