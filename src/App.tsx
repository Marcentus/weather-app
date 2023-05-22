import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { apiKey } from "./api";
import WeatherData from "./components/WeatherData";

function App() {
  const [weatherData, setWeatherData] = useState(Object);
  const [locationInput, setLocationInput] = useState("");

  useEffect(() => {
    getWeatherData("New York");
  }, []);

  async function getWeatherData(location: string) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Error getting weather");
    }
  }

  function handleLocationInput(event: React.ChangeEvent<HTMLInputElement>) {
    setLocationInput(event.target.value);
  }

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    getWeatherData(locationInput);
  }

  return (
    <div className="weather-app">
      <Search
        locationInput={locationInput}
        handleLocationInput={handleLocationInput}
        handleSearch={handleSearch}
      />

      <WeatherData weatherData={weatherData} />
    </div>
  );
}

export default App;
