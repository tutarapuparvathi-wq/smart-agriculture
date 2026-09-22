# Smart Agriculture UI

Files included:
- src/App.jsx
- src/Login.jsx
- src/Login.css
- src/Dashboard.jsx
- src/Dashboard.css

## How to use

1. Copy these files into your React project's `src` folder.
2. Make sure `App.js` imports match your project:
   - If your project uses `App.js`, rename `App.jsx` to `App.js`.
3. Run:
   npm start

## Important

The OTP login is a frontend demo only. It accepts any valid 10-digit mobile number and a 4–6 digit OTP. For a real application, connect the OTP step to your backend/SMS provider.

Dashboard cards currently show an alert. Connect each card to your existing Crop, Weather, Soil, Disease, Irrigation, Market and Profile pages/routes.
