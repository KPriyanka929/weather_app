import "./App.css";
import "./components/Search.js";
import "./components/dashboard.js";

import Search from "./components/Search.js";
import Dashboard from "./components/dashboard.js";

export default function App() {
  return (
    <>
      <Search />
      <Dashboard className="time" content={<Time />} />
      <Dashboard className="daily" content={<Daily />} />
      <Dashboard className="weather" content={<Weather />} />
      <Dashboard className="hourly" content={<Hour />} />
    </>
  );
}

function Time() {
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
        Mumbai
      </h1>

      <p className="timing">09:03</p>
      <p
        style={{
          fontFamily: "Times New Roman",
          margin: "2px 0px 0px 150px ",
        }}
      >
        Thursday,31 Aug
      </p>
    </>
  );
}

function Daily() {
  return (
    <>
      <h4 className="day">5 Days Forecast:</h4>
      <div
        className="temp"
        style={{
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <h6>
          20°C <span>Friday, 1 Sep</span>
        </h6>
        <h6 style={{ marginLeft: "92px" }}>
          22°C <span>Saturday, 2 Sep</span>
        </h6>
        <h6>
          27°C <span>Sunday, 3 Sep</span>
        </h6>
        <h6>
          18°C <span>Monday, 4 Sep</span>
        </h6>
        <h6>
          16°C <span>Tuesday, 5 Sep</span>
        </h6>
      </div>
    </>
  );
}

function Hour() {
  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
        Hourly Forecast:
      </h2>
      <div className="hour">
        <div>
          <h4>12:00</h4>
          <h5>26°C</h5>
          <p>3km/h</p>
        </div>
        <div>
          <h4>15:00</h4>
          <h5>27°C</h5>
          <p>2km/h</p>
        </div>
        <div>
          <h4>18:00</h4>
          <h5>27°C</h5>
          <p>2km/h</p>
        </div>
        <div>
          <h4>21:00</h4>
          <h5>25°C</h5>
          <p>3km/h</p>
        </div>
        <div>
          <h5>00:00</h5>
          <h5>22°C</h5>
          <p>3km/h</p>
        </div>
      </div>
    </>
  );
}

function Weather() {
  return (
    <>
      <div className="weather1">
        <h1 className="header" style={{ paddingLeft: "20px" }}>
          24°C
        </h1>
        <h4 style={{ color: "#292929", margin: "-35px 0px 0px 25px" }}>
          Feels like:<span style={{ fontSize: "20px" }}>22°C</span>
        </h4>
        <div style={{ margin: "30px 0px 0px 75px" }}>
          <h5 style={{ fontSize: "15px" }}>Sunrise</h5>
          <h5 style={{ marginTop: "-30px" }}>06:35 AM</h5>
          <h5 style={{ fontSize: "15px" }}>Sunset</h5>
          <h5 style={{ marginTop: "-30px" }}>20:35 AM</h5>
        </div>

        <h1 style={{ margin: "-60px 0px 0px 255px" }}>Sunny</h1>

        <div></div>
      </div>
    </>
  );
}
