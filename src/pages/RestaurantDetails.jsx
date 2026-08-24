import { Link, useParams } from "react-router-dom";

import restaurant1 from "../assets/restaurant1.jpg";
import restaurant2 from "../assets/restaurant2.jpg";
import restaurant3 from "../assets/restaurant3.jpg";
import restaurant4 from "../assets/restaurant4.jpg";
import restaurant5 from "../assets/restaurant5.jpg";
import restaurant6 from "../assets/restaurant6.jpg";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurants = [
    {
      image: restaurant1,
      name: "Paradise Biryani",
      location: "Hyderabad",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹₹",
      description:
        "Paradise Biryani is famous for authentic Hyderabadi Dum Biryani, rich spices and delicious Indian cuisine.",
      speciality: "Hyderabadi Dum Biryani",
      timing: "11:00 AM - 11:00 PM",
    },
    {
      image: restaurant2,
      name: "Spice Garden",
      location: "Kakinada",
      rating: "⭐⭐⭐⭐",
      price: "₹₹",
      description:
        "Spice Garden offers delicious Indian dishes prepared with traditional spices and fresh ingredients.",
      speciality: "Indian Cuisine",
      timing: "10:00 AM - 10:30 PM",
    },
    {
      image: restaurant3,
      name: "Food Paradise",
      location: "Vijayawada",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹₹₹",
      description:
        "Food Paradise is a family-friendly restaurant with a variety of tasty dishes and a comfortable atmosphere.",
      speciality: "Family Dining",
      timing: "11:00 AM - 10:30 PM",
    },
    {
      image: restaurant4,
      name: "Royal Restaurant",
      location: "Visakhapatnam",
      rating: "⭐⭐⭐⭐",
      price: "₹₹₹",
      description:
        "Royal Restaurant provides delicious food, excellent service and a relaxing dining atmosphere.",
      speciality: "Royal Indian Food",
      timing: "11:00 AM - 11:00 PM",
    },
    {
      image: restaurant5,
      name: "Tasty Corner",
      location: "Rajahmundry",
      rating: "⭐⭐⭐⭐⭐",
      price: "₹₹",
      description:
        "Tasty Corner is a great place to enjoy delicious meals with friends and family.",
      speciality: "South Indian Food",
      timing: "9:00 AM - 10:00 PM",
    },
    {
      image: restaurant6,
      name: "Delicious Hub",
      location: "Chennai",
      rating: "⭐⭐⭐⭐",
      price: "₹₹",
      description:
        "Delicious Hub offers a wide variety of tasty dishes for food lovers.",
      speciality: "Multi Cuisine",
      timing: "10:00 AM - 11:00 PM",
    },
  ];

  const restaurant = restaurants[Number(id) - 1];

  if (!restaurant) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Restaurant Not Found</h1>

        <Link to="/restaurants">
          ← Back to Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#f8f8f8",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "30px" }}>
          <h1>{restaurant.name}</h1>

          <p style={{ fontSize: "18px" }}>
            📍 {restaurant.location}
          </p>

          <p style={{ fontSize: "18px" }}>
            {restaurant.rating} &nbsp; {restaurant.price}
          </p>

          <h2>About the Restaurant</h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#555",
            }}
          >
            {restaurant.description}
          </p>

          <h2>🍽️ Speciality</h2>

          <p>{restaurant.speciality}</p>

          <h2>🕐 Opening Hours</h2>

          <p>{restaurant.timing}</p>

          <Link
            to="/restaurants"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 25px",
              background: "#ff6b35",
              color: "white",
              textDecoration: "none",
              borderRadius: "7px",
              fontWeight: "bold",
            }}
          >
            ← Back to Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;