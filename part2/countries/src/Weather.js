const Weather = () => {
  return (
    <div>
      <p>temperature: {weatherState.current.temperature}</p>
      <img src={weatherState.current.weather_icons} alt="icon" />
      <p>
        wind: {weatherState.current.wind_speed}mph in direction
        {weatherState.current.wind_dir}
      </p>
    </div>
  )
}
