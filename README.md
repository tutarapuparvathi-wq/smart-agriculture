# Smart Agriculture System – User Friendly Frontend

This version changes the login flow to:

1. Enter mobile number
2. Click **Send OTP**
3. Enter OTP
4. Continue to the farmer dashboard

## Demo OTP
For frontend demonstration only, use:

`123456`

No real SMS service is connected in this version.

## Dashboard features

- Crop Information
- Weather
- Market Prices
- Soil Health
- Farm Alerts
- Farm Profile
- Mobile-friendly responsive layout
- Farmer-friendly navigation
- Quick summary cards

## Run in VS Code

```bash
cd smart-agriculture-user-friendly
npm install
npm start
```

The app opens at:

`http://localhost:3000`

## Important

This is a frontend/demo authentication flow. For a real application, connect OTP verification to a backend/SMS provider and never hard-code the OTP.
