function Experience() {
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
          ⭐ Restaurant Experience
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
          Discover what makes a great restaurant experience.
          From delicious food to friendly service, every detail
          matters.
        </p>
      </div>

      {/* Experience Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "40px auto",
        }}
      >
        <div style={cardStyle}>
          <div style={{ fontSize: "45px" }}>🍽️</div>

          <h2>Delicious Food</h2>

          <p>
            Enjoy freshly prepared dishes made with quality
            ingredients and delicious flavors.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "45px" }}>👨‍🍳</div>

          <h2>Friendly Service</h2>

          <p>
            Our friendly staff helps create a comfortable and
            enjoyable dining experience.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "45px" }}>✨</div>

          <h2>Great Atmosphere</h2>

          <p>
            Relax and enjoy your meal in a pleasant and welcoming
            restaurant atmosphere.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: "45px" }}>👨‍👩‍👧‍👦</div>

          <h2>Family Friendly</h2>

          <p>
            A perfect place to spend quality time with your family
            and friends.
          </p>
        </div>
      </div>

      {/* Our Promise */}
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "30px",
          background: "white",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2>❤️ Our Promise</h2>

        <p
          style={{
            color: "#555",
            fontSize: "17px",
            lineHeight: "1.8",
          }}
        >
          We believe that a restaurant is more than just food.
          It is about creating memories, sharing moments and
          providing an experience that customers remember.
        </p>
      </div>

      {/* Contact */}
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
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

export default Experience;