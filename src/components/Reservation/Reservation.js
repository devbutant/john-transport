import React from "react";
import "../App/App.css";
// import photoCalendrier from '../../img/calender.png';

// import {
//     useJsApiLoader,
//     Autocomplete,
//   } from '@react-google-maps/api'
import { useRef } from "react";

function Reservation() {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     libraries: ['places'],
    //   })

    //   const [directionsResponse, setDirectionsResponse] = useState(null)
    //   const [distance, setDistance] = useState('')
    //   const [value, setValue] = useState('')
    //   const [duration, setDuration] = useState('')
    //   const [carPrice, setCarPrice] = useState('')

    //   const [vehicle, setVehicle] = useState('');
    //   const [disable, setDisable] = useState(false);

    /** @type React.MutableRefObject<HTMLInputElement> */
    //   const originRef = useRef()
    //   /** @type React.MutableRefObject<HTMLInputElement> */
    //   const destinationRef = useRef()

    //   Form Send
    const form = useRef();

    //   if (!isLoaded) {
    //     return <div>Erreur<br/> Veuillez me contacter par téléphone</div>
    //   }

    function calculateRoute() {
        //   async function calculateRoute(){
        console.log("calculate route");
    }

    //         if (originRef.current.value === '' || destinationRef.current.value === '') {
    //             alert('Veuillez entrer le lieu de départ et celui d\'arrivée')
    //         }
    //         // eslint-disable-next-line no-undef
    //         const directionsService = new google.maps.DirectionsService()
    //         const results = await directionsService.route({
    //             origin: originRef.current.value,
    //             destination: destinationRef.current.value,
    //             // eslint-disable-next-line no-undef
    //             travelMode: google.maps.TravelMode.DRIVING,
    //         })

    //         const vanPrice = parseFloat(value / 1000 * 3.5).toFixed(2);
    //         const berlinePrice = parseFloat(value / 1000 * 2.5).toFixed(2);

    //         if(vehicle == "Van"){
    //             setCarPrice(parseFloat(results.routes[0].legs[0].distance.value / 1000 * 3.5).toFixed(2));
    //         } else {
    //             setCarPrice(parseFloat(results.routes[0].legs[0].distance.value / 1000 * 2.5).toFixed(2));
    //         };

    //         setDirectionsResponse(results)
    //         setDistance(results.routes[0].legs[0].distance.text)
    //         setDuration(results.routes[0].legs[0].duration.text)
    //         setValue(results.routes[0].legs[0].distance.value)
    //   }

    function sendReservation(e) {
        console.log(e);
    }
    // e.preventDefault();
    // e.currentTarget.disabled = true;
    // e.currentTarget.textContent = "patiente";
    // console.log('button clicked');

    // let timeLeft = 3;

    // const timer = setInterval(() => {
    //     if(timeLeft <= 1){
    //         clearInterval(timer);
    //         e.currentTarget.disabled = false;
    //         e.currentTarget.textContent = "C est reparti";
    //     }
    //     tst.current = "Veuillez patientez " + timeLeft + "40s avant une prochaine réservation";
    //     console.log("compteur : " + timeLeft);
    //     timeLeft--;
    // }, 1000);

    // emailjs.sendForm('service_hq8a7t4', 'template_3kvfweo', form.current, '-tsr6gYmhjBTZ1xmM')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     alert("Une erreur a été detectée, veuillez me contacter par téléphone :\n06 00 00 00 00\n" + error.text);
    // });
    // form.current.reset();
    //   }

    return (
        <div className="bg-x-light-gray">
            <section id="reservation" className="container py-3">
                {/* <div className="reservation__img center column">
                        <img src={ photoCalendrier } alt="John transport vtc voiture"/>
                    </div> */}
                <h2 className="reservation__title title">Réserver en ligne</h2>
                <span className="primary">
                    Réservez votre course à l'avance avec notre formulaire en
                    ligne, et bénéficiez d'un tarif personnalisé en fonction de
                    votre trajet et du véhicule choisi.
                </span>
                <hr className="mt-2 w-100" />

                {/* FORM  */}
                <form
                    ref={form}
                    onSubmit={sendReservation}
                    className="flex between"
                >
                    {/* FIRST PART  */}

                    <div className="reservation__form__container left py-1">
                        <div className="form flex wrap between mt-1">
                            <h2 className="reservation__title title">
                                1 - J'indique mon trajet
                            </h2>
                            <div className="input-group w-100">
                                <label htmlFor="depart">Lieu de départ :</label>
                                <input
                                    type="text"
                                    placeholder="Ex : 424, avenue Jean Jaures 75015 Paris"
                                    name="depart"
                                    id="depart"
                                    className="w-100"
                                />
                            </div>

                            <div className="input-group w-100">
                                <label htmlFor="destination">
                                    Lieu de destination :
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ex : 16, rue de Pruvost 92800 Puteaux"
                                    name="destination"
                                    id="destination"
                                    className="w-100"
                                />
                            </div>
                            <div className="input-group w-50">
                                <label htmlFor="vh-choix">
                                    Choisissez votre véhicule :
                                </label>

                                <select name="vh-choix" className="w-100">
                                    <option value="" className="type-choice">
                                        -- Type de véhicule --
                                    </option>
                                    <option value="Berline">
                                        Berline (4 places)
                                    </option>
                                    <option value="Van">Van (8 places)</option>
                                </select>
                            </div>

                            <div className="input-group w-50">
                                <div className="btn mt-2 w-100 center bold">
                                    Calculer le trajet
                                </div>
                            </div>

                            <hr className="mt-2 w-100" />

                            <div className="input-group w-50">
                                <label htmlFor="distance">Distance :</label>
                                <input
                                    type="text"
                                    name="distance"
                                    id="distance"
                                    className="w-100"
                                />
                            </div>
                            <div className="input-group w-50">
                                <label htmlFor="temps">Temps de trajet :</label>
                                <input
                                    name="temps"
                                    type="text"
                                    id="distance"
                                    className="w-100"
                                />
                            </div>

                            <div className="input-group w-50">
                                <label htmlFor="total">Prix total :</label>
                                <input
                                    name="total"
                                    type="text"
                                    id="total"
                                    className="w-100"
                                />
                            </div>

                            <div className="input-group w-50">
                                <label htmlFor="reglement">
                                    Pré-paiement (30%):
                                </label>
                                <input
                                    name="reglement"
                                    type="text"
                                    id="reglement"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECOND PART  */}

                    <div className="reservation__form__container left py-1">
                        <div className="reservation__form my-1">
                            <h2 className="reservation__title title">
                                2 - Je finalise ma demande de réservation
                            </h2>

                            <div className="form flex wrap between">
                                <div className="input-group w-50">
                                    <label htmlFor="Sexe">Sexe :</label>
                                    <div className="flex">
                                        <div className="flex mr-2">
                                            <input
                                                type="radio"
                                                id="madame"
                                                name="sexe"
                                                value="Madame"
                                                className="mr-1"
                                                defaultChecked
                                            />
                                            <label htmlFor="madame">
                                                Madame
                                            </label>
                                        </div>
                                        <div className="flex">
                                            <input
                                                type="radio"
                                                id="monsieur"
                                                name="sexe"
                                                value="Monsieur"
                                                className="mr-1"
                                            />
                                            <label htmlFor="monsieur">
                                                Monsieur
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group w-50">
                                    <label htmlFor="nom">Nom :</label>
                                    <input
                                        type="text"
                                        name="nom"
                                        className="name w-100"
                                    />
                                </div>

                                <div className="input-group w-50">
                                    <label htmlFor="prenom">Prénom :</label>
                                    <input
                                        type="text"
                                        name="prenom"
                                        className="fname w-100"
                                        placeholder="Votre prénom"
                                    />
                                </div>

                                <div className="input-group w-50">
                                    <label htmlFor="tel">
                                        Numéro de téléphone :
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        className="tel w-100"
                                        placeholder="Ex : 06 11 22 33 44"
                                    />
                                </div>

                                <div className="input-group w-50">
                                    <label htmlFor="date-depart">
                                        Date de départ :
                                    </label>
                                    <input
                                        type="date"
                                        name="date-depart"
                                        id="date"
                                        className="date w-100"
                                    />
                                </div>

                                <div className="input-group w-50">
                                    <label htmlFor="heure-depart">
                                        Heure de départ :
                                    </label>
                                    <input
                                        type="time"
                                        name="heure-depart"
                                        id="heure-depart"
                                        className="heure-depart w-100"
                                    />
                                </div>

                                <div className="input-group w-100">
                                    <label htmlFor="autre">
                                        Autre précision :
                                    </label>
                                    <textarea
                                        name="autre"
                                        className="w-100"
                                        cols="30"
                                        rows="5"
                                        placeholder="Fauteuil roulant, poussette..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="mt-2 w-100">
                                    {/* <button disabled={disable} type='submit' className="mt-2 w-100" onClick={()=>setDisable(true)}> */}
                                    Envoyer ma demande de réservation
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Reservation;
