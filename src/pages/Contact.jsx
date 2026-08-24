import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully! 😊");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#f8f8f8",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "40px" }}>📞 Contact Us</h1>

        <p style={{ fontSize: "18px", color: "#666" }}>
          We would love to hear from you!
        </p>
      </div>

      {/* Contact Information */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📞 Phone</h2>
          <p>+91 7981721322</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📧 Email</h2>
          <p>restaurantblog@gmail.com</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📍 Address</h2>
          <p>Kakinada, Andhra Pradesh</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🕐 Opening Hours</h2>
          <p>10:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Message Form */}
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          📝 Send Us a Message
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              boxSizing: "border-box",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              boxSizing: "border-box",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              display: "block",
              margin: "15px auto 0",
              padding: "12px 30px",
              background: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "7px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;