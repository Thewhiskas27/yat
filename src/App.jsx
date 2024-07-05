import data from './data'
import Vehicle from './components/Vehicle.jsx'
import './App.css'
import React from 'react'

function klaxonner(klaxon) {
    const alertInformation = Object.entries(klaxon)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    alert(alertInformation);
}
class Formulaire extends React.Component {
    vehicle = {
        marque: '',
        modele: '',
        annee: '',
        couleur: ''
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.setVehicle({
            marque: "Hello World!",
            modele: "Hello World!",
            annee: "Hello World!",
            couleur: "Hello World!"
        })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label> Entrez du texte </label>
                    <input
                        type="text"
                        value={this.vehicle.marque}
                        onChange={(e) => this.setState({marque: e.target.value})}
                    />
                    <input
                        type="text"
                        value={this.vehicle.modele}
                        onChange={(e) => this.setVehicle({modele: e.target.value})}
                    />
                    <input
                        type="text"
                        value={this.vehicle.annee}
                        onChange={(e) => this.setVehicle({annee: e.target.value})}
                    />
                    <input
                        type="text"
                        value={this.vehicle.couleur}
                        onChange={(e) => this.setVehicle({couleur: e.target.value})}
                    />
                </form>
                <br/>
                <p>Marque : {this.vehicle.marque}</p>
                <p>Modele : {this.vehicle.modele}</p>
                <p>Annee : {this.vehicle.annee}</p>
                <p>Couleur : {this.vehicle.couleur}</p>
            </div>
        )
    }
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
            <Formulaire/>
        </div>
    )
}

export default App