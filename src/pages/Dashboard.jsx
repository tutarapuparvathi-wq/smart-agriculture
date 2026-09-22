import React from "react";
import "./Dashboard.css";

const features = [
  {
    title: "Crop Information",
    text: "View crop details, growing guidance and seasonal information.",
    icon: "🌱",
    tag: "CROPS",
    color: "green"
  },
  {
    title: "Weather",
    text: "Check temperature, humidity, rainfall and useful weather updates.",
    icon: "☀️",
    tag: "WEATHER",
    color: "blue"
  },
  {
    title: "Market Prices",
    text: "View crop prices and compare market information before selling.",
    icon: "📈",
    tag: "MARKET",
    color: "orange"
  },
  {
    title: "Soil Health",
    text: "Keep important soil observations in one easy-to-read place.",
    icon: "🪴",
    tag: "SOIL",
    color: "brown"
  },
  {
    title: "Farm Alerts",
    text: "See reminders and important farming notifications.",
    icon: "🔔",
    tag: "ALERTS",
    color: "purple"
  },
  {
    title: "Farm Profile",
    text: "Keep your farm and location details available for quick access.",
    icon: "👨‍🌾",
    tag: "PROFILE",
    color: "teal"
  }
];

export default function Dashboard({ onLogout }) {
  const phone = localStorage.getItem("farmerPhone") || "";
  const masked = phone ? `+91 ${phone.slice(0, 2)}••••••${phone.slice(-2)}` : "Farmer";

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="side-brand">
          <div className="side-logo">🌾</div>
          <div>
            <strong>Smart Agriculture</strong>
            <small>Farmer App</small>
          </div>
        </div>

        <nav>
          <button className="nav-item active"><span>⌂</span> Home</button>
          <button className="nav-item"><span>🌱</span> Crops</button>
          <button className="nav-item"><span>☀️</span> Weather</button>
          <button className="nav-item"><span>📊</span> Market</button>
          <button className="nav-item"><span>🔔</span> Alerts</button>
        </nav>

        <div className="side-bottom">
          <div className="help-box">
            <b>Need help?</b>
            <p>Use the app features from the home screen.</p>
          </div>
          <button className="logout-btn" onClick={onLogout}>↪ Logout</button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="welcome-small">FARMER DASHBOARD</span>
            <h1>Good morning, Farmer 👋</h1>
            <p>Everything you need for smarter farming, in one place.</p>
          </div>
          <div className="profile-chip">
            <div className="avatar">👨‍🌾</div>
            <div>
              <strong>Farmer</strong>
              <small>{masked}</small>
            </div>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card">
            <span className="summary-icon green-bg">🌱</span>
            <div><small>MY CROPS</small><strong>4</strong><span>Active crops</span></div>
          </div>
          <div className="summary-card">
            <span className="summary-icon blue-bg">🌤️</span>
            <div><small>TODAY'S WEATHER</small><strong>28°C</strong><span>Partly cloudy</span></div>
          </div>
          <div className="summary-card">
            <span className="summary-icon orange-bg">📈</span>
            <div><small>MARKET UPDATE</small><strong>₹2,850</strong><span>Avg. crop price</span></div>
          </div>
          <div className="summary-card">
            <span className="summary-icon purple-bg">🔔</span>
            <div><small>ALERTS</small><strong>2</strong><span>Need attention</span></div>
          </div>
        </section>

        <section className="section-head">
          <div>
            <span className="section-kicker">APP FEATURES</span>
            <h2>What would you like to check?</h2>
          </div>
          <span className="hint">Tap any feature to continue</span>
        </section>

        <section className="feature-grid">
          {features.map((feature) => (
            <button className="feature-card" key={feature.title}>
              <div className={`feature-icon ${feature.color}`}>{feature.icon}</div>
              <div className="feature-body">
                <span className="feature-tag">{feature.tag}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
              <span className="arrow">→</span>
            </button>
          ))}
        </section>

        <section className="tip-card">
          <div className="tip-icon">💡</div>
          <div>
            <b>Today's farming tip</b>
            <p>Check the weather before planning irrigation or spraying activities.</p>
          </div>
          <button>View tip →</button>
        </section>

        <footer className="dashboard-footer">
          <span>🌿 Smart Agriculture System</span>
          <span>Simple • Useful • Farmer Friendly</span>
        </footer>
      </main>
    </div>
  );
}