import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setMessage("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    setMessage("OTP sent successfully. Demo OTP: 123456");
    setStep(2);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      localStorage.setItem("farmerPhone", phone);
      onLogin();
    } else {
      setMessage("Invalid OTP. For this demo, use 123456.");
    }
  };

  return (
    <main className="login-page">
      <section className="login-visual">
        <div className="visual-overlay">
          <div className="brand-badge">🌱 Smart Agriculture</div>
          <h1>Grow smarter.<br />Farm better.</h1>
          <p>
            Simple farming information in one place — crops, weather and market
            data designed for everyday use.
          </p>
          <div className="visual-points">
            <span>✓ Easy to use</span>
            <span>✓ Farmer friendly</span>
            <span>✓ Mobile responsive</span>
          </div>
        </div>
      </section>

      <section className="login-card-wrap">
        <div className="login-card">
          <div className="logo-circle">🌾</div>
          <p className="eyebrow">WELCOME</p>
          <h2>{step === 1 ? "Login with mobile" : "Verify your OTP"}</h2>
          <p className="subtext">
            {step === 1
              ? "No password required. We will send a one-time password."
              : `Enter the 6-digit OTP sent to +91 ${phone}`}
          </p>

          {step === 1 ? (
            <form onSubmit={sendOtp}>
              <label>Mobile Number</label>
              <div className="phone-input">
                <span>+91</span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength="10"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  autoFocus
                />
              </div>
              <button className="primary-btn" type="submit">
                Send OTP <span>→</span>
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOtp}>
              <label>One-Time Password</label>
              <input
                className="otp-input"
                type="text"
                inputMode="numeric"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                autoFocus
              />
              <button className="primary-btn" type="submit">
                Verify & Continue <span>→</span>
              </button>
              <button
                className="text-btn"
                type="button"
                onClick={() => {
                  setStep(1);
                  setOtp("");
                  setMessage("");
                }}
              >
                Change mobile number
              </button>
            </form>
          )}

          {message && <div className="login-message">{message}</div>}

          <div className="login-footer">
            <span>🔒 Secure demo login</span>
            <span>•</span>
            <span>Made for farmers</span>
          </div>
        </div>
      </section>
    </main>
  );
}