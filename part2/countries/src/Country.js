import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weatherState, setWeatherState] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => {
        setWeatherState(response.data);
      });
  }, [api_key, country.capital]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map((langage) => {
          return <li key={langage.name}>{langage.name}</li>;
        })}
      </ul>
      <img src={country.flag} alt="flag" width="80px"></img>
      <h2>Weather in {country.capital}</h2>
      {weatherState === null ? (
        <p>loading</p>
      ) : (
        <div>
          <p>temperature: {weatherState.current.temperature}</p>
          <img src={weatherState.current.weather_icons} alt="icon" />
          <p>
            wind: {weatherState.current.wind_speed}mph in direction{" "}
            {weatherState.current.wind_dir}
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
