# FPS Anti‑Cheat Detector (Android APK)

Analyze FPS screen recordings to detect snap‑on aiming behavior on-device.

## Features
- Detects rapid crosshair movement (snap/aimbot) heuristically.
- Works entirely on-device.
- No backend; simple and private.

## Getting Started
```bash
npm install
npm start
```
-- or --
```bash
npx expo start
npm run android
```

## Build APK via EAS
```bash
eas build --platform android --profile preview
```

## Upload Gameplay
Tap the button to select an `.mp4` screen recording. The app will analyze and display the result. 
 
