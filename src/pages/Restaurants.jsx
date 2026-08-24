import { Link } from "react-router-dom";

import restaurant1 from "../assets/restaurant1.jpg";
import restaurant2 from "../assets/restaurant2.jpg";
import restaurant3 from "../assets/restaurant3.jpg";
import restaurant4 from "../assets/restaurant4.jpg";
import restaurant5 from "../assets/restaurant5.jpg";
import restaurant6 from "../assets/restaurant6.jpg";

function Restaurants() {
  const restaurants = [
    {
      image: restaurant1,
      name: "Paradise Biryani",
      description: "Famous for delicious Hyderabadi Dum Biryani.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      image: restaurant2,
      name: "Spice Garden",
      description: "Enjoy delicious Indian food and traditional flavors.",
      rating: "⭐⭐⭐⭐",
    },
    {
      image: restaurant3,
      name: "Food Paradise",
      description: "A perfect place for family dining and great food.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      image: restaurant4,
      name: "Royal Restaurant",
      description: "Taste delicious dishes in a wonderful atmosphere.",
      rating: "⭐⭐⭐⭐",
    },
    {
      image: restaurant5,
      name: "Tasty Corner",
      description: "Enjoy tasty food with friends and family.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      image: restaurant6,
      name: "Delicious Hub",
      description: "A great destination for food lovers.",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        background: "#f8f8f8",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        🍴 Our Restaurants
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "35px",
          color: "#666",
          fontSize: "18px",
        }}
      >
        Explore our favourite restaurants and delicious food.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2 style={{ marginBottom: "10px" }}>
                {restaurant.name}
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.5",
                }}
              >
                {restaurant.description}
              </p>

              <p style={{ margin: "15px 0" }}>
                {restaurant.rating}
              </p>

              <Link
                to={`/restaurant/${index + 1}`}
                style={{
                  display: "inline-block",
                  background: "#ff6b35",
                  color: "white",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;