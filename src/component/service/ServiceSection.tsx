"use client";
import { useState, useEffect } from 'react';
import axios from "axios";
import Weather from './Weather';
import Forecast from './Forecast';
import './style.css';

// Define the shape of the weather data you're expecting from the API
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

// Component function definition with proper types
const ServiceSection: React.FC = () => {
  const [city, setCity] = useState<string>('Lagos'); // Default city
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Type as WeatherData or null
  const [error, setError] = useState<string>(''); // Type as string

  const apiKey = 'b2c7f93dea41c02f4f7d51f0e5c74a57'; // Replace with your Weather API key

  // Specify the type for the async function parameter and the return value
  const fetchWeather = async (cityName: string): Promise<void> => {
    try {
      const res = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeatherData(res.data);  // Correctly typed response
      setError('');
    } catch (error) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <section className="rv-20-service_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="rv-20-service_section_heading">
              <div className="app">
                <div className="search">
                  <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <button onClick={() => fetchWeather(city)}>Search</button>
                </div>
                {error && <p className="error">{error}</p>}

                <div className="weather-forecast">
                  <div className="weather">
                    <Weather weatherData={weatherData} />
                  </div>
                  <div className="forecast">
                    <Forecast city={city} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
