import React from "react";
import logo from "../../img/logo.svg";
import "./Header.css";

function Header() {
    return (
        <section id="hero-banner">
            <div className="hero-banner">
                <div className="hero-banner__img"></div>

                <div className="hero-banner__card p-3 center column around">
                    <div className="hero-banner__card__logo">
                        <img src={logo} alt="John transport vtc logo" />
                        <h2 className="title">Monsieur John DOE</h2>
                    </div>
                    <p>
                        <strong className="bold">John Transport</strong> vous
                        accompagne dans vos trajets quotidiens à bord d’un
                        véhicule confortable et silencieux.
                    </p>
                    <a
                        href="#reservation"
                        className="btn btn-reservation mt-1 bold"
                    >
                        Réserver une course
                    </a>
                </div>
            </div>
            <div className="space"></div>
        </section>
    );
}

export default Header;
