import React from 'react';

// Define the expected structure of the weather data
interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

// Define the props structure for the Weather component
interface WeatherProps {
  weatherData: WeatherData | null; // weatherData could be null
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  // Map the weather icons to specific image files
  const iconMapping: { [key: string]: string } = {
    '01d': 'clear-day.png',
    '01n': 'clear-night.png',
    '02d': 'partly-cloudy-day.png',
    '02n': 'partly-cloudy-night.png',
    '03d': 'cloudy.png',
    '03n': 'cloudy.png',
    '04d': 'cloudy.png',
    '09d': 'rain.png',
    '09n': 'rain.png',
    '10d': 'rain.png',
    '10n': 'rain.png',
    '11d': 'rain.png',
    '11n': 'rain.png',
    '13d': 'snow.png',
    '13n': 'snow.png',
    '50d': 'fog.png',
    '50n': 'fog.png',
  };

  if (!weatherData) {
    return (
      <div className="container">
        <div className="weather-content">
          <h2>No weather data available yet.</h2>
          <p>Please search for a city.</p>
        </div>
      </div>
    );
  }

  const { name, sys, main, weather, wind } = weatherData;
  const weatherIcon = iconMapping[weather[0].icon] || 'default.png'; // Fallback image

  return (
    <div className="container">
      <div className="weather-content">
        <h2>{name}, {sys.country}</h2>
        <img
          src={`/images/${weatherIcon}`}
          alt={weather[0].description}
          width="70"
        />
        <p>{weather[0].description}</p>
        <p>{Math.round(main.temp)}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
