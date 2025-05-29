// src/components/Card.jsx
import React from 'react';
import { Sun, CloudRain, Snowflake, Cloud } from 'lucide-react';

const getWeatherIcon = (main) => {
  switch (main) {
    case 'Clear':
      return <Sun className="text-yellow-400 w-10 h-10" />;
    case 'Rain':
      return <CloudRain className="text-blue-400 w-10 h-10" />;
    case 'Snow':
      return <Snowflake className="text-blue-200 w-10 h-10" />;
    default:
      return <Cloud className="text-gray-400 w-10 h-10" />;
  }
};

const Card = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-center mb-2">
        {getWeatherIcon(weather.weather[0].main)}
      </div>
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-gray-700 capitalize">{weather.weather[0].description}</p>
      <p className="text-3xl font-bold mt-2">
        {Math.round(weather.main.temp)}°C
      </p>
    </div>
  );
};

export default Card;