import { useState } from "react";
export default function Search({ weatherdata, fivedaydata }) {
  const [input, setInput] = useState("");

  async function Api() {
    try {
      const api_id = "c507466cd6dd86c846a311509b1089a0";
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_id}&units=metric`
      );
      const fivedayapi =
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${api_id}&units=metric
`);
      const data = await api.json();
      console.log(data);

      const daydata = await fivedayapi.json();

      console.log(daydata);
      if (data.cod === 200 && daydata.cod === "200") {
        weatherdata(data); // ✅ valid data
        fivedaydata(daydata);
      } else {
        alert("please put valid city name and try again ");
        weatherdata(null); // ❌ invalid: hide dashboard
        fivedaydata(null);
      }
    } catch {
      alert("please try again after some time");

      return null;
    }
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      Api();
    }
  }

  function handleLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
      const cord = pos.coords;
      const lat = cord.latitude;
      const long = cord.longitude;
      console.log(`lat : ${lat} long:${long}`);
      fetchlocationbycoord(lat, long);
    }
    function error(err) {
      alert("Error", err);
    }
  }
  async function fetchlocationbycoord(lat, long) {
    try {
      const api_id = "c507466cd6dd86c846a311509b1089a0";
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_id}&units=metric`
      );
      const data = await api.json();
      console.log("Current location city name from API:", data.name);

      const fivedayapi = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${api_id}&units=metric`
      );
      const daydata = await fivedayapi.json();
      console.log(data);
      console.log(daydata);
      if (data.cod === 200 && daydata.cod === "200") {
        weatherdata(data); // ✅ valid data
        fivedaydata(daydata);
      } else {
        alert("please put valid city name and try again ");
        weatherdata(null); // ❌ invalid: hide dashboard
        fivedaydata(null);
      }
    } catch (err) {
      alert("please try again after some time");
      console.log(err);

      return null;
    }
  }

  return (
    <>
      <input
        value={input}
        className="searchbar"
        placeholder="Search for your preferred location..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
      />

      <button
        onClick={handleLocation}
        style={{
          backgroundColor: "#4CBB17",
          color: "white",
          height: "50px",
          width: "200px",
          borderRadius: "30px",
          fontWeight: "900",
          marginLeft: "80px",
        }}
      >
        Current Location
      </button>
    </>
  );
}
