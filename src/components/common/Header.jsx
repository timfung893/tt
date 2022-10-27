import React, { useEffect, useState } from 'react';
import logo from '../assets/images/icon.png';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

function Header(props) {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header')
        const hero = document.querySelector('.hero')
        const story = document.querySelector('.cardmain')

        header.classList.toggle('active', this.window.scrollY > 70)
        hero.classList.toggle('is-trans', this.window.scrollY > 70)
        story.classList.toggle('active', this.window.scrollY > 70)
    })
    
    // set state for mobile menu
    const [mobile, setMobile] = useState(false);

    return (
       <header className='header'>
            <div className="container">
                <nav>
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
                            {navlist.map((nav) => (
                                <li key={nav.id}>
                                    <Link to={nav.path}>{nav.text}</Link>
                                </li>
                            ))}
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