import React from "react";
import photoVoiture from "../../img/voiture.png";
import "./About.css";

function About() {
    return (
        <section id="about" className="container my-3 flex between">
            <div className="about__txt py-1">
                <h2 className="about__title title">
                    À propos de <strong>John Transport</strong>
                </h2>
                <span className="primary">
                    Les garanties de votre chauffeur privé
                </span>
                <div className="about__list my-2">
                    <ul>
                        <li>
                            <span className="bold">Conduite zen :</span>{" "}
                            Chauffeur professionnel et expérimenté. Voyagez
                            l'esprit tranquille !
                        </li>
                        <li>
                            <span className="bold">
                                Prix fixes et transparents :
                            </span>{" "}
                            Nos tarifs sont fixes et garantis lors de la
                            réservation. Ils comprennent frais, taxes et
                            pourboires.
                        </li>
                        <li>
                            <span className="bold">7 jours sur 7 :</span> Vous
                            pouvez nous contacter 7 jours sur 7 pour toute
                            demande de course.
                        </li>
                        <li>
                            <span className="bold">Attente gratuite :</span> Ne
                            vous stressez pas, nous vous attendons. 😉
                        </li>
                        <li>
                            <span className="bold">Mise à disposition :</span>{" "}
                            60€/h TTC pour mariage, visite de Paris ou autres
                            évènements.
                        </li>
                    </ul>
                </div>
                <div className="btn-more flex flex-end mt-1">
                    <a href="#reservation" className="btn bold">
                        En savoir plus
                    </a>
                </div>
            </div>
            <div className="about__img center px-4">
                <div className="bg-img1">
                    <div className="bg-img2 center py-2">
                        <img
                            src={photoVoiture}
                            alt="John transport vtc voiture"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
