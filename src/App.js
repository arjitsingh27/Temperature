import './App.css';
import CityInput from './component/CityInput';
import React from 'react'
import CityWeather from './component/CityWeather';

function App() {
  const [city, setCity] = React.useState("")
  const [weather, setWeather] = React.useState({})

  const fetchCityWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
      .then((response) => response.json())
      .then((result) => {
        console.log("Result is ", result)
        setWeather(result)
      })

  }

  return (
    <div className="App">
    <h1>CITY WEATHER</h1>
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather} />
      <CityWeather weather={weather} />
    </div>
  );
}

export default App;
