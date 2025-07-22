import "./App.css";
import "./components/Search.js";
import "./components/dashboard.js";
import { useState } from "react";
import Search from "./components/Search.js";
import Dashboard from "./components/dashboard.js";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [daydata, setDays] = useState(null);

  return (
    <>
      <Search weatherdata={setWeather} fivedaydata={setDays} />

      {weather ? (
        <>
          <Dashboard className="time" content={<Time weather={weather} />} />
          <Dashboard className="daily" content={<Daily daily={daydata} />} />
          <Dashboard
            className="weather"
            content={<Weather weather={weather} />}
          />
          <Dashboard className="hourly" content={<Hour hour={daydata} />} />
        </>
      ) : (
        <h2
          style={{
            color: "red",
            textAlign: "center",
            fontFamily: "Poppins",
            marginTop: "40px",
          }}
        >
          Please enter a valid city name
        </h2>
      )}
    </>
  );
}
function Time({ weather }) {
  if (!weather) return "ENTER VALID CITY NAME";
  const timezone = weather.timezone;

  // Get current UTC time in milliseconds
  const nowUTC = Date.now(); // in ms

  // Add the city's timezone offset (converted from seconds to ms)
  const localTime = new Date(nowUTC + timezone * 1000);

  // Format time
  const time = localTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC", // we already applied offset manually
  });

  // Format date
  const date = localTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          paddingTop: "25px",
          color: "#292929",
        }}
      >
        {weather.name}
      </h1>

      <h6 className="timing">{time}</h6>
      <p
        style={{
          fontFamily: "Times New Roman",
          margin: "2px 0px 0px 120px ",
          fontSize: "30px",
        }}
      >
        {date}
      </p>
    </>
  );
}

function Daily({ daily }) {
  if (!daily || !daily.list) return null;

  let groupbydate = {};
  for (let i = 0; i < daily.list.length; i += 1) {
    const date = daily.list[i].dt_txt.split(" ")[0];

    if (!groupbydate[date]) {
      groupbydate[date] = []; // ✅ create empty array for date if not exists
    }

    groupbydate[date].push(daily.list[i].main.temp);
  }
  console.log(groupbydate);

  return (
    <>
      <h4 className="day"> Days Forecast:</h4>
      <div
        className="temp"
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        {Object.entries(groupbydate).map(([date, temp]) => {
          const avg = temp.reduce((acc, curr) => acc + curr, 0) / temp.length;
          return (
            <div className="forecast">
              <h5>
                <span style={{ marginRight: "50px" }}>{avg.toFixed(2)}°C</span>
                {new Date(date).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Hour({ hour }) {
  if (!hour || !hour.list) return null; // 👈 prevent crash

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
        Hourly Forecast:
      </h2>
      <div className="hours">
        {hour.list.slice(0, 8).map((p, i) => (
          <div className="hour " key={i}>
            <h4>{p.dt_txt.split(" ")[1].slice(0, 5)}</h4>
            <h5>{p.main.temp}°C</h5>
            <p>{p.wind.speed}km/h</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Weather({ weather }) {
  const timezone = weather.timezone * 1000;

  const sunriseTime = new Date(
    weather.sys.sunrise * 1000 + timezone
  ).toLocaleTimeString();
  const sunsetTime = new Date(
    weather.sys.sunset * 1000 + timezone
  ).toLocaleTimeString();

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

        <h1 style={{ margin: "-60px 0px 0px 250px" }}>
          {weather.weather[0].main}
        </h1>

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
