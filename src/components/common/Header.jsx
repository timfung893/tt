import React from 'react';
import logo from '../assets/images/logo.svg'
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
                </nav>
            </div>
       </header>
    );
}

export default Header;