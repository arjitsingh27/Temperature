import React from 'react'

function CityWeather({ weather }) {
    return (
        <div className="citywether">
            <strong>Name:{weather?.name}</strong><br/><br/>
            <strong>Temperature:{weather?.main?.temp}</strong><br/><br/>
            <strong>Humidity:{weather?.main?.humidity}</strong><br/><br/>
            <strong>Pressure:{weather?.main?.pressure}</strong>
        </div>
    )
}

export default CityWeather;



