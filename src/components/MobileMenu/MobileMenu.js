import React from "react";
import logoWhite from "../../img/logo-white.svg";
import "../App/App.css";

function MobileMenu() {
    return (
        <div>
            <div id="mobile-menu">
                <nav>
                    <div className="logo center">
                        <img src={logoWhite} alt="John transport vtc logo" />
                    </div>
                    <ul>
                        <li>
                            <a href="#about">Accueil</a>
                        </li>
                        <li>
                            <a href="#reservation">Réservation</a>
                        </li>
                        <li>
                            <a href="#avis">Avis</a>
                        </li>
                        <li>
                            <a href="tel:+33000000000">06 00 00 00 00</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="menu-mobile-bg"></div>
        </div>
    );
}
export default MobileMenu;
