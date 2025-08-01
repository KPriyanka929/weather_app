export default function Hour({ hour }) {
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
