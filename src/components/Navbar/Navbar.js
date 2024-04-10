import React from "react";
import logo from "../../img/logo.svg";
import "../App/App.css";

function Navbar() {
    return (
        <nav className="nav-bg">
            <div className="nav container">
                <div className="nav__logo">
                    <a href="#" className="nav__logo__item title flex">
                        <img src={logo} alt="John transport vtc logo" />
                        <h1>John Transport</h1>
                    </a>
                </div>
                <ul className="nav__items center around">
                    <li>
                        <a href="#about" className="nav__items__item">
                            À propos
                        </a>
                    </li>
                    <li>
                        <a href="#reservation" className="nav__items__item">
                            Réservation
                        </a>
                    </li>
                    <li>
                        <a href="#avis" className="nav__items__item">
                            Avis
                        </a>
                    </li>
                    <li>
                        <a href="tel:+33000000000" className="nav__items__item">
                            06 00 00 00 00
                        </a>
                    </li>
                </ul>
                <div className="hamburger-btn" id="hamburger-btn">
                    <div className="menu-bar1 bar"></div>
                    <div className="menu-bar2 bar"></div>
                    <div className="menu-bar3 bar"></div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
