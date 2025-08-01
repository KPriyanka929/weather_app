export default function Daily({ daily }) {
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
