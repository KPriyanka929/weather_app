export default function Time({ weather }) {
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
