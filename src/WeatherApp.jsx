// src/WeatherApp.jsx
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import WeatherCard from './components/Card';
import Card from './components/Card';

const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error('City not found');

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">🌤️ Weather App</h1>

        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button onClick={fetchWeather} disabled={loading}>
  {loading ? (
    <span className="flex items-center gap-2">
      <span className="animate-spin h-4 w-4 rounded-full border-t-2 border-white"></span>
      Loading...
    </span>
  ) : (
    'Search'
  )}
</Button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <Card weather={weather} />
      </div>
    </div>
  );
};

export default WeatherApp;