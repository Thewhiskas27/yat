import './Vehicle.css'
import PropTypes from 'prop-types';
export default function Vehicle({
                                       marque,
                                       modele,
                                       annee,
                                       couleur,
                                       vehicleType,
                                        klaxon,
                                       klaxonner // Recevoir la fonction comme prop
                                   }) {
    return (
        <div className="vehicle-wrapper">
            <h2>{marque} {modele}</h2>
            <p><strong>Année :</strong> {annee}</p>
            <p><strong>Couleur :</strong> {couleur}</p>
            <p><strong>Specificités :</strong> {vehicleType.join(', ')}</p>
            {klaxonner && (
                <button onClick={() => klaxonner(klaxon)}>Son</button>
            )}
        </div>
    )
}
Vehicle.propTypes = {
    klaxon: PropTypes.shape({
        sound: PropTypes.string
    }),
    marque: PropTypes.string.isRequired,
    modele: PropTypes.string.isRequired,
    annee: PropTypes.number.isRequired,
    couleur: PropTypes.string.isRequired,
    vehicleType: PropTypes.arrayOf(PropTypes.string).isRequired,
    klaxonner: PropTypes.func.isRequired,
}
Vehicle.defaultProps = {
    klaxon: {
        sound: '(Pas de son)'
    }
}