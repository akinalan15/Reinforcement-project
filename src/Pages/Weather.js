import React, { useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_png from "../assets/clear.png";
import cloud_png from "../assets/cloud.png";
import drizzle_png from "../assets/drizzle.png";
import humidity_png from "../assets/humidity.png";
import rain_png from "../assets/rain.png";
import snow_png from "../assets/snow.png";
import wind_png from "../assets/wind.png";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [Weatherinfo, setWeatherinfo] = useState(null);
  const [error, setError] = useState("");

  const allIcons = {
    "01d": clear_png,
    "01n": clear_png,
    "02d": cloud_png,
    "02n": cloud_png,
    "03d": cloud_png,
    "03n": cloud_png,
    "04d": drizzle_png,
    "04n": drizzle_png,
    "09d": rain_png,
    "09n": rain_png,
    "10d": rain_png,
    "10n": rain_png,
    "13d": snow_png,
    "13n": snow_png,
  };

  const apiKey = "90e9103288cf8002ac2b6f8eb1eb46c3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;

  const searchPressed = () => {
    if (!search) {
      setError("Please enter a city name");
      return;
    }

    setError("");

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((result) => {
        const iconCode = result.weather[0].icon;
        const icon = allIcons[iconCode] || clear_png;

        setWeatherinfo({ ...result, icon });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <img src={search_icon} alt="search" onClick={searchPressed} />
      </div>
      {error && <p className="error-message">{error}</p>}{" "}
      {Weatherinfo && (
        <>
          <img
            src={Weatherinfo.icon}
            alt="weather-icon"
            className="weather-icon"
          />
          <p className="temperature">{Weatherinfo.main.temp}°C</p>
          <p className="location">{Weatherinfo.name}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_png} alt="humidity" />
              <div>
                <p>{Weatherinfo.main.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_png} alt="wind" />
              <div>
                <p>{Weatherinfo.wind.speed} Km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
