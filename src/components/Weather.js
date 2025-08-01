export default function Weather({ weather }) {
  const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <>
      <div className="weather1">
        <h1 className="header" style={{ paddingLeft: "20px" }}>
          {weather.main.temp}°C
        </h1>
        <h4 style={{ color: "#292929", margin: "-35px 0px 0px 25px" }}>
          Feels like :
          <span style={{ fontSize: "20px" }}>{weather.main.feels_like}°C</span>
        </h4>
        <div style={{ margin: "30px 0px 0px 75px" }}>
          <h5 style={{ fontSize: "15px" }}>Sunrise</h5>
          <h5 style={{ marginTop: "-30px" }}>{sunriseTime}</h5>
          <h5 style={{ fontSize: "15px" }}>Sunset</h5>
          <h5 style={{ marginTop: "-30px" }}>{sunsetTime}</h5>
        </div>
        <div className="image">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            style={{ width: "200px", height: "200px" }}
          />
          <h1>{weather.weather[0].main}</h1>
        </div>

        <div className="details">
          <div className="Humidity">
            <h4>{weather.main.humidity}%</h4>
            <p>Humidity</p>
          </div>
          <div className="Windspeed">
            <h4>{weather.wind.speed}km/hr</h4>
            <p>Windspeed</p>
          </div>
          <div className="Pressure">
            <h4>{weather.main.pressure}hPa</h4>
            <p>Pressure</p>
          </div>
          <div className="UV">
            <h4>{weather.visibility}m</h4>
            <p>Visibility</p>
          </div>
        </div>
      </div>
    </>
  );
}
