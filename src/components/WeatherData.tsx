import { useState } from "react";
import "./WeatherData.css";

interface WeatherDataProps {
  weatherData: {
    location: { name: string; region: string; country: string };
    current: { temp_f: number; temp_c: number };
  };
}

export default function WeatherData(props: WeatherDataProps) {
  const { weatherData } = props;
  const [tempUnit, setTempUnit] = useState(0);

  return (
    <>
      {weatherData && weatherData.current && (
        <>
          <p className="location-text">{`${weatherData.location.name}, ${weatherData.location.region}`}</p>
          <p className="temperature">
            {tempUnit === 0
              ? `${weatherData.current.temp_f}°F`
              : `${weatherData.current.temp_c}°C`}
            <button
              className="toggle-unit-button"
              onClick={() =>
                setTempUnit((prevUnit) => (prevUnit === 0 ? 1 : 0))
              }
            >
              {tempUnit === 0 ? "°C" : "°F"}
            </button>
          </p>
        </>
      )}
    </>
  );
}
