import data from './data'
import Vehicle from './components/Vehicle.jsx'
import './App.css'
function klaxonner(klaxon) {
    const alertInformation = Object.entries(klaxon)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    alert(alertInformation);
}
function App() {
    return (
        <div className="wrapper">
            <h1>Véhicules</h1>
            {data.map(vehicle => (
                <Vehicle
                    key={vehicle.modele}
                    marque={vehicle.marque}
                    modele={vehicle.modele}
                    annee={vehicle.annee}
                    couleur={vehicle.couleur}
                    vehicleType={vehicle.vehicleType}
                    klaxon={vehicle.klaxon}
                    klaxonner={klaxonner}
                />
            ))}
        </div>
    )
}
export default App