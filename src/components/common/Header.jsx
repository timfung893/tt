import React from 'react';
import logo from '../assets/images/logo.svg';
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
       <header>
            <div className="container">
                <nav>
                    <div className="toggle">
                        <button>
                            Menu
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="center">
                        <ul className='menu'>
                            {navlist.map((nav) => (
                                <li key={nav.id}>
                                    <Link to={nav.path}>{nav.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                <div className="right">
                    <div className="right_search">
                        <input type="text" placeholder='Search products...' />
                        <BiSearch className='searchIcon heIcon'/>
                    </div>
                    <div className="right_user">
                        <RiUser3Line className='userIcon heIcon'/>
                        <AiOutlineHeart className='userIcon heIcon'/>
                    </div>
                    <div className="right_card">
                        <button className='button'>
                            <BsBagCheck className='shop heIcon' /> 
                            MY CART (0)     
                        </button>
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header;