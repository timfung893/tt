import React, { useEffect, useState } from 'react';
import $ from 'jquery'; 
import logo from '../assets/images/icon.png';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';
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
        hero.classList.toggle('is-trans', this.window.scrollY > 70)
        story.classList.toggle('active', this.window.scrollY > 70)

        // if (isInViewPort && this.window.scrollY < 70) {
        //     story.scrollIntoView()    
        // }

    })

    const scrollOnClick = () => {
        $(".home").click(() => {
            $("html, body").animate(
              {
                scrollTop: $("#home").offset().top,
              },
              1000
            );
        });
        $(".ourstory").click(() => {
            $("html, body").animate(
              {
                scrollTop: $("#ourstory").offset().top - 200,
              },
              1000
            );
        });
        $(".link.gallery").click(() => {
            $("html, body").animate(
              {
                scrollTop: $("#gallery").offset().top,
              },
              1000
            );
        });
        $(".location").click(() => {
            $("html, body").animate(
              {
                scrollTop: $("#location").offset().top,
              },
              1000
            );
        });
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
                            {mobile ? <AiOutlineClose className='close heIcon'/> : <AiOutlineMenu className='open heIcon'/>}
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="center">
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