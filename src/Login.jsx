import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setOtpSent(true);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (!/^\d{4,6}$/.test(otp)) {
      alert("Please enter the OTP.");
      return;
    }
    // Demo authentication. Connect this to your backend OTP API later.
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand">
          <div className="brand-icon">🌾</div>
          <div>
            <h1>Smart Agriculture</h1>
            <p>Smart Farming • Better Future</p>
          </div>
        </div>

        <div className="farmer-message">
          <span>👨‍🌾</span>
          <h2>Welcome, Farmer!</h2>
          <p>
            Get weather updates, crop guidance, soil information,
            disease detection, irrigation advice and market prices
            in one simple application.
          </p>
        </div>

        <div className="login-features">
          <div>🌦️ Live Weather</div>
          <div>🌱 Crop Guidance</div>
          <div>💰 Market Prices</div>
          <div>🦠 Disease Check</div>
        </div>
      </div>

      <div className="login-card">
        <div className="login-logo">🌾</div>
        <h2>Farmer Login</h2>
        <p className="subtitle">
          Login using your mobile number. No password required.
        </p>

        {!otpSent ? (
          <form onSubmit={sendOtp}>
            <label>Mobile Number</label>
            <div className="input-wrap">
              <span>📱</span>
              <input
                type="tel"
                maxLength="10"
                placeholder="Enter 10-digit mobile number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            <button className="primary-btn" type="submit">
              Send OTP →
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <label>Enter OTP</label>
            <div className="input-wrap">
              <span>🔐</span>
              <input
                type="tel"
                maxLength="6"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            <button className="primary-btn" type="submit">
              Verify & Continue →
            </button>

            <button
              type="button"
              className="back-btn"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
              }}
            >
              Change Mobile Number
            </button>
          </form>
        )}

        <div className="language-box">
          <span>🌐</span>
          <span>తెలుగు</span>
          <span>English</span>
        </div>

        <div className="voice-help">🎤 Voice Assistance Available</div>

        <p className="demo-note">
          Demo: Any valid 10-digit number and 4–6 digit OTP will continue.
        </p>
      </div>
    </div>
  );
}

export default Login;
