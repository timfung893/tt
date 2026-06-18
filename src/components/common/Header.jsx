import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import $ from "jquery";
import logo from "../assets/images/icon.png";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
    window.addEventListener("scroll", function (e) {
        const header = document.querySelector(".header");
        const hero = document.querySelector(".hero");
        const story = document.querySelector(".cardmain");
        // const rect = story.getBoundingClientRect()
        // const isInViewPort = rect.top >= 0 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        header.classList.toggle("active", this.window.scrollY > 70);
        if (hero) {
            hero.classList.toggle("is-trans", this.window.scrollY > 70);
        }
        if (story) {
            story.classList.toggle("active", this.window.scrollY > 70);
        }

        // if (isInViewPort && this.window.scrollY < 70) {
        //     story.scrollIntoView()
        // }
    });

    function scrollToSection(id, sectionId) {
        $(id).click(() => {
            $("html, body").animate(
                {
                    scrollTop: $(sectionId).offset().top,
                },
                1000
            );
        });
        setMobile(false);
    }

    const scrollOnClick = () => {
        scrollToSection(".home", "#home");
        scrollToSection(".ourstory", "#ourstory");
        scrollToSection(".link.gallery", "#gallery");
        scrollToSection(".location", "#location");
    };

    // set state for mobile menu
    const [mobile, setMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // scrollOnClick();

        const sectionId = location.hash?.replace("#", "");
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100); // slight delay ensures DOM is ready
            }
        }
    }, [location]);

    return (
        <header className="header">
            <div className="container">
                <nav className="menu-wrapper">
                    <div className="toggle">
                        <button onClick={() => setMobile(!mobile)}>
                            <div
                                className={
                                    mobile ? "bar one active" : "bar one"
                                }
                            ></div>
                            <div
                                className={
                                    mobile ? "bar two active" : "bar two"
                                }
                            ></div>
                            <div
                                className={
                                    mobile ? "bar three active" : "bar three"
                                }
                            ></div>
                        </button>
                    </div>
                    <div className="left">
                        <img src={logo} alt="" />
                    </div>
                    <div className={mobile ? "center open" : "center"}>
                        <ul className={mobile ? "mobile-nav" : "menu"}>
                            <li>
                                {/* <a href="#home" className="link home">
                                    home
                                </a> */}
                                <Link to={`/`} onClick={() => setMobile(false)}>home</Link>
                            </li>
                            <li>
                                {/* <a href="#ourstory" className="link ourstory">
                                    chủ xị
                            </a> */}
                                <Link
                                    to={`/#ourstory`}
                                    onClick={() =>
                                        scrollToSection(
                                            ".ourstory",
                                            "#ourstory"
                                        )
                                    }
                                >
                                    chủ xị
                                </Link>
                            </li>
                            <li>
                                {/* <a href="#gallery" className="link gallery">
                                    ảnh
                                </a> */}
                                <Link
                                    to={`/#gallery`}
                                    onClick={() =>
                                        scrollToSection(
                                            ".link.gallery",
                                            "#gallery"
                                        )
                                    }
                                >
                                    ảnh
                                </Link>
                            </li>
                            <li>
                                {/* <a href="#location" className="link location">
                                    địa điểm
                                </a> */}

                                <Link
                                    to={`/#location`}
                                    onClick={() =>
                                        scrollToSection(
                                            ".link.location",
                                            "#location"
                                        )
                                    }
                                >
                                    địa điểm
                                </Link>
                            </li>
                            <li>
                                <Link to={`/trips`} onClick={() => setMobile(false)}>ăn chơi</Link>
                            </li>
                            <li>
                                <Link to={`/thestart`} onClick={() => setMobile(false)}>nơi bắt đầu</Link>
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
        amount: state.amount,
    };
};
connect(mapStateToProps)(Header);

export default Header;
