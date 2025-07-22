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
        onClick={Api}
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
