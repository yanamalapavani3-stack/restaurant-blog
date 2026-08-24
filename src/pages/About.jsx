function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#fffaf5",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "40px",
            color: "#ff6b35",
          }}
        >
          About Our Restaurant 🍴
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "800px",
            margin: "15px auto",
            lineHeight: "1.7",
          }}
        >
          Welcome to our Restaurant Blog, where food lovers can
          discover delicious dishes, amazing restaurants and
          unforgettable dining experiences.
        </p>
      </div>

      {/* Our Story */}
      <div
        style={{
          background: "white",
          maxWidth: "1000px",
          margin: "35px auto",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>📖 Our Story</h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Our journey started with a simple passion for good food.
          We wanted to create a place where people could discover
          restaurants, explore different cuisines and share their
          dining experiences.
        </p>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Today, our restaurant blog helps food lovers find
          interesting restaurants and enjoy new flavours with
          friends and family.
        </p>
      </div>

      {/* Why Choose Us */}
      <div style={{ textAlign: "center" }}>
        <h2>⭐ Why Choose Us?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "25px auto",
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontSize: "40px" }}>🍽️</div>
            <h3>Delicious Food</h3>
            <p>Discover tasty dishes and popular cuisines.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "40px" }}>👨‍🍳</div>
            <h3>Quality Service</h3>
            <p>We focus on great food and wonderful service.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "40px" }}>⭐</div>
            <h3>Great Experience</h3>
            <p>Find restaurants perfect for every occasion.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "40px" }}>❤️</div>
            <h3>Food Lovers</h3>
            <p>A community created for people who love food.</p>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
        <h2>🏆 Our Specialties</h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          🍛 Biryani &nbsp;&nbsp; 🍕 Pizza &nbsp;&nbsp; 🍔 Burgers
          &nbsp;&nbsp; 🍰 Desserts
        </p>
      </div>

      {/* Contact Number */}
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "25px",
          background: "#fff3e8",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2>📞 Contact Us</h2>

        <p style={{ fontSize: "20px" }}>
          Call us: <strong>+91 79817 21322</strong>
        </p>

        <p style={{ color: "#666" }}>
          📧 restaurantblog@gmail.com
        </p>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default About;