import restaurant from "../assets/restaurant.jpg";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
        background: "#f8f8f8",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>
        🍴 Welcome to Restaurant Blog
      </h1>

      <p
        style={{
          fontSize: "19px",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Discover delicious food, amazing restaurants and
        wonderful dining experiences.
      </p>

      <img
        src={restaurant}
        alt="Beautiful Restaurant"
        style={{
          width: "90%",
          maxWidth: "1000px",
          height: "450px",
          objectFit: "cover",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
        }}
      />

      <h2
        style={{
          marginTop: "35px",
          fontSize: "30px",
        }}
      >
        🍽️ Delicious Food & Great Experiences
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "15px auto",
          fontSize: "17px",
          lineHeight: "1.7",
          color: "#555",
        }}
      >
        Welcome to our restaurant blog! Explore popular restaurants,
        discover delicious dishes, read customer experiences and find
        the perfect place for your next meal.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#ff6b35",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Explore Restaurants
      </button>
    </div>
  );
}

export default Home;