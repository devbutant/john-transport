import React from "react";
import logo from "../../img/logo-white.svg";
import "../App/App.css";

function Footer() {
    return (
        <footer className="footer-bg column py-2">
            <div className="container">
                <hr className="w-100 my-1" />
            </div>

            <div className="footer container py-1">
                <div className="nav__logo">
                    <a href="#" className="nav__logo__item title flex">
                        <img src={logo} alt="John transport vtc logo" />
                        <h2>John Transport</h2>
                    </a>
                    <p>
                        2022 © -{" "}
                        <a href="#mentions-legales">Mentions légales</a>
                    </p>
                </div>

                <div className="links-container w-50 flex around wrap">
                    <ul className="footer__items">
                        <h3>Liens utiles</h3>
                        <li>
                            <a
                                href="mailto:johndoe@example.com"
                                className="footer__items__item"
                            >
                                Contact via mail
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+33000000000"
                                className="footer__items__item"
                            >
                                Contact via téléphone
                            </a>
                        </li>
                        <li>
                            <a
                                href="www.facebook.fr"
                                className="footer__items__item"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__items">
                        <h3>Conditions</h3>
                        <li>
                            <a
                                href="mailto:johndoe@example.com"
                                className="footer__items__item"
                            >
                                Mentions légales
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+33000000000"
                                className="footer__items__item"
                            >
                                Politique de confidentialités
                            </a>
                        </li>
                        <li>
                            <a
                                href="www.facebook.fr"
                                className="footer__items__item"
                            >
                                Tarifs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
