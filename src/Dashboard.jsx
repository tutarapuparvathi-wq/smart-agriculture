import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard({ onLogout }) {
  const [location, setLocation] = useState("Ravulapalem");
  const [language, setLanguage] = useState("English");

  const locations = [
    "Ravulapalem",
    "Amalapuram",
    "Kakinada",
    "Rajahmundry",
    "Konaseema",
    "Vijayawada",
    "Guntur"
  ];

  const modules = [
    {
      icon: "🌱",
      title: "Crop",
      text: "Manage crops & get recommendations",
      color: "green"
    },
    {
      icon: "🌦️",
      title: "Weather",
      text: "Weather conditions & forecast",
      color: "blue"
    },
    {
      icon: "🧪",
      title: "Soil",
      text: "Soil health & moisture information",
      color: "brown"
    },
    {
      icon: "🦠",
      title: "Disease",
      text: "Check crop disease from image",
      color: "red"
    },
    {
      icon: "💧",
      title: "Irrigation",
      text: "Smart water & irrigation advice",
      color: "cyan"
    },
    {
      icon: "💰",
      title: "Market",
      text: "Crop prices & market information",
      color: "gold"
    }
  ];

  const openModule = (title) => {
    alert(`${title} module selected. Connect this card to your ${title} page.`);
  };

  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div className="app-brand">
          <div className="app-logo">🌾</div>
          <div>
            <h1>Smart Agriculture</h1>
            <span>Farmer Support System</span>
          </div>
        </div>

        <div className="top-actions">
          <div className="language-select">
            🌐
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>తెలుగు</option>
            </select>
          </div>
          <button className="notification-btn" title="Notifications">
            🔔
          </button>
          <button className="profile-mini">👨‍🌾</button>
        </div>
      </header>

      <main className="dashboard-container">
        <section className="location-row">
          <div>
            <p className="small-label">YOUR FARM LOCATION</p>
            <div className="location-title">📍 {location}</div>
          </div>

          <select
            className="location-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </section>

        <section className="welcome">
          <div>
            <p className="welcome-small">Good Morning 👋</p>
            <h2>Welcome, Farmer!</h2>
            <p>
              Here is today's farming information for{" "}
              <strong>{location}</strong>.
            </p>
          </div>
          <div className="sun">☀️</div>
        </section>

        <section className="summary-grid">
          <div className="summary-card weather-summary">
            <div className="summary-icon">🌤️</div>
            <div>
              <span>Weather</span>
              <strong>29°C</strong>
              <small>Sunny • Humidity 68%</small>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🌱</div>
            <div>
              <span>My Crop</span>
              <strong>Rice</strong>
              <small>2 Acres • Flowering stage</small>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">💧</div>
            <div>
              <span>Soil Moisture</span>
              <strong>62%</strong>
              <small>Good condition</small>
            </div>
          </div>
        </section>

        <div className="section-heading">
          <div>
            <h3>Farm Services</h3>
            <p>Choose a service to manage your farm</p>
          </div>
        </div>

        <section className="module-grid">
          {modules.map((module) => (
            <button
              className={`module-card ${module.color}`}
              key={module.title}
              onClick={() => openModule(module.title)}
            >
              <div className="module-icon">{module.icon}</div>
              <div className="module-content">
                <h4>{module.title}</h4>
                <p>{module.text}</p>
              </div>
              <span className="arrow">→</span>
            </button>
          ))}
        </section>

        <section className="recommendation">
          <div className="recommendation-icon">🤖</div>
          <div className="recommendation-content">
            <span className="recommendation-title">
              Today's Farming Recommendation
            </span>
            <h3>Good time for irrigation</h3>
            <p>
              Rain probability is low today. Consider irrigating your rice
              crop for about 25 minutes.
            </p>
            <div className="recommendation-tags">
              <span>💧 Irrigation: 25 min</span>
              <span>🌧️ Rain: 20%</span>
            </div>
          </div>
        </section>

        <section className="quick-info">
          <div>
            <span>💰 Today's Rice Price</span>
            <strong>₹2,450 / quintal</strong>
            <small>Market information</small>
          </div>
          <div>
            <span>🌡️ Temperature</span>
            <strong>29°C</strong>
            <small>Feels like 31°C</small>
          </div>
          <div>
            <span>🌧️ Rain Probability</span>
            <strong>20%</strong>
            <small>Low chance today</small>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="active">🏠<span>Home</span></button>
        <button onClick={() => openModule("Crop")}>🌱<span>Crops</span></button>
        <button onClick={() => openModule("Weather")}>🌦️<span>Weather</span></button>
        <button onClick={() => openModule("Market")}>💰<span>Market</span></button>
        <button onClick={() => alert("Profile page")}>👤<span>Profile</span></button>
      </nav>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
