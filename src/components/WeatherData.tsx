import "./WeatherData.css";

interface WeatherDataProps {
  weatherData: {
    location: { name: string; region: string };
    current: { temp_f: number };
  };
}

export default function WeatherData(props: WeatherDataProps) {
  const { weatherData } = props;
  return (
    <>
      {weatherData && weatherData.current && weatherData.location && (
        <>
          <p className="location-text">{`${weatherData.location.name}, ${weatherData.location.region}`}</p>
          <p className="temperature">{`${weatherData.current.temp_f}F`}</p>
        </>
      )}
    </>
  );
}
