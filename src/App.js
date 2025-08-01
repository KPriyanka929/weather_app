import "./App.css";
import "./components/Search.js";
import "./components/dashboard.js";
import { useState } from "react";
import Search from "./components/Search.js";
import Time from "./components/Time";
import Daily from "./components/Daily";
import Weather from "./components/Weather";
import Hour from "./components/Hour";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard.js";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [daydata, setDays] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <>
            <Search weatherdata={setWeather} fivedaydata={setDays} />

            {weather ? (
              <>
                <Dashboard
                  className="time"
                  content={<Time weather={weather} />}
                />
                <Dashboard
                  className="daily"
                  content={<Daily daily={daydata} />}
                />
                <Dashboard
                  className="weather"
                  content={<Weather weather={weather} />}
                />
                <Dashboard
                  className="hourly"
                  content={<Hour hour={daydata} />}
                />
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
        }
      />
    </Routes>
  );
}
