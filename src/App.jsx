import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fffaf5",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#ffffff",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            color: "#ff6b35",
            margin: 0,
          }}
        >
          🍴 Restaurant Blog
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "5px",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/about" style={linkStyle}>
            About
          </Link>

          <Link to="/restaurants" style={linkStyle}>
            Restaurants
          </Link>

          <Link to="/experience" style={linkStyle}>
            Experience
          </Link>

          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/restaurants"
          element={<Restaurants />}
        />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetails />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          background: "#fff3e8",
          color: "#333",
          textAlign: "center",
          padding: "35px 20px",
          marginTop: "40px",
          borderTop: "1px solid #ffe0cc",
        }}
      >
        <h2
          style={{
            color: "#ff6b35",
            marginBottom: "10px",
          }}
        >
          🍴 Restaurant Blog
        </h2>

        <p>
          Discover delicious food, amazing restaurants and
          wonderful dining experiences.
        </p>

        <p>📞 +91 98765 43210</p>

        <p>📧 restaurantblog@gmail.com</p>

        <p
          style={{
            marginTop: "20px",
            color: "#777",
          }}
        >
          © 2026 Restaurant Blog. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "#555",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
};

export default App;