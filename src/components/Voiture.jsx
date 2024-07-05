import './Vehicle.css'
import Vehicle from "./Vehicle.jsx";
import PropTypes from 'prop-types'
class Voiture extends Vehicle{
    constructor(props) {
        super(props);
        this.state = {
            marque: "Ford",
            modele: "Mustang",
            annee: 1964,
            couleur: "rouge",
            vehicleType: ["Voiture", "SUV", "Hybride"],
            klaxon: {
                sound: 'Honk'
            }
        }
    }
}
export default Voiture