export default function Search() {
  return (
    <>
      <input
        className="searchbar"
        placeholder="Search for your preferred location..."
      />

      <button
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
