import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatBot from './ChatBot';

// Define the structure of the weather data and forecast list
interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

interface CityInfo {
  name: string;
  country: string;
}

interface ForecastResponse {
  list: ForecastItem[];
  city: CityInfo;
}

// Define the props structure for the Forecast component
interface ForecastProps {
  city: string;
}

const iconMapping: { [key: string]: string } = {
  '01d': 'clear-day.png',
  '01n': 'clear-night.png',
  '02d': 'partly-cloudy-day.png',
  '02n': 'partly-cloudy-night.png',
  '03d': 'cloudy.png',
  '03n': 'cloudy.png',
  '04d': 'cloudy.png',
  '04n': 'cloudy.png',
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

const extremeWeatherConditions = ['11d', '11n', '13d', '13n']; // Add more codes if needed

const Forecast: React.FC<ForecastProps> = ({ city }) => {
  const [forecastData, setForecastData] = useState<ForecastItem[]>([]);
  const [error, setError] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [cityName, setCityName] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('Nigeria'); // Default country for Nigerian cities
  const apiKey = 'b2c7f93dea41c02f4f7d51f0e5c74a57'; // Use your actual API key

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get<ForecastResponse>(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city},NG&appid=${apiKey}&units=metric`
        );

        // Extract city and country information from the response
        const cityInfo = res.data.city || {};
        setCityName(cityInfo.name || city);
        setCountryName('Nigeria'); // Since you're only working with Nigerian cities

        const filteredData = res.data.list.filter((reading) =>
          reading.dt_txt.includes('12:00:00')
        );
        setForecastData(filteredData);
        setError('');

        // Check for extreme weather conditions
        const extremeWeather = filteredData.some(item =>
          extremeWeatherConditions.includes(item.weather[0].icon)
        );

        if (extremeWeather) {
          setAlertMessage('Extreme weather conditions detected. Please stay safe and monitor local news for updates.');
        } else {
          setAlertMessage('Weather conditions are normal. No extreme weather detected.');
        }
      } catch (error) {
        setError('Unable to fetch forecast data');
        setForecastData([]);
        setAlertMessage('Unable to fetch weather data.');
      }
    };

    fetchForecast();
  }, [city]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="container">
      <div className="weather-content">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <h3>5-Day Forecast for {cityName}, {countryName}</h3>
            <div className="forecast-grid">
              {forecastData.length ? (
                forecastData.slice(0, 5).map((item) => {
                  const weatherIcon = iconMapping[item.weather[0].icon] || 'default.png';
                  return (
                    <div key={item.dt} className="forecast-item">
                      <p>{formatDate(item.dt_txt)}</p>
                      <img
                        src={`/images/${weatherIcon}`}
                        alt={item.weather[0].description}
                        width="70"
                      />
                      <p>{Math.round(item.main.temp)}°C</p>
                      <p>{item.weather[0].description}</p>
                    </div>
                  );
                })
              ) : (
                <p>No forecast data available. Please search for a city.</p>
              )}
            </div>
          </>
        )}
      </div>

      <div className="additional-content">
        <div className="video-section">
          <h4>Weather Alert</h4>
          <p>{alertMessage}</p>
        </div>
      </div>
      <div className="additional-content">
        <div className="input-frame">
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
