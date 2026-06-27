# OTTExpo

A React Native streaming app UI built with Expo for iOS and Android.

## What is this?

OTTExpo is a mobile app that looks like Netflix or Disney+. It shows featured content in a carousel, organized Movies, and a user profile page.

## Features

- **Home Screen** - Banner slider and channel recommendations
- **Profile Screen** - User profile with dark/light theme toggle
- **Theme Support** - Switch between dark and light modes
- **iOS & Android** - Native mobile experience on both platforms

## Tech Stack

- React Native
- Expo
- TypeScript
- NativeWind (Tailwind CSS)
- Zustand (State Management)
- React Native Paper
- React Navigation

## Installation

1. Clone the repo

    ```bash
    git clone <repo-url>
    cd ottexpo
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Start the app
    ```bash
    npm start
    ```

## Running on Mobile

### Android

Option 1: Using Android Emulator

```bash
npm run android
```

Option 2: Using Expo Go

- Install Expo Go from Google Play
- Run `npm start`
- Scan QR code with Expo Go app

### iOS

Option 1: Using iOS Simulator

```bash
npm run ios
```

Option 2: Using Expo Go

- Install Expo Go from App Store
- Run `npm start`
- Scan QR code with Expo Go app

## Project Structure

```
ottexpo/
├── src/
│   ├── screens/         # App pages (Home, Profile)
│   ├── components/      # Reusable UI components
│   ├── navigation/      # App navigation setup
│   ├── theme/           # Colors and design tokens,
│   ├──assets/           # Images and icons
│   ├── store/           # App state (Zustand)
│   └── services/        # API calls
└── App.tsx              # Main app file
```

## Screenshots

### Home Screen

<img src="./src/assets/screen-home.png" width="300" alt="Home Screen"/>

### Detail Screen

<img src="./src/assets/screen-detail.png" width="300" alt="Home Screen"/>

### Profile Screen

<img src="./src/assets/screen-profile.png" width="300" alt="Home Screen"/>

## Available Scripts

```bash
npm start              # Start development server
npm run android        # Run on Android emulator
npm run ios           # Run on iOS simulator
npm run lint          # Check code quality
npm run reset-project # Reset to initial state
```

**Features shown:**

- TellyGO app branding
- Banner carousel with featured content
- Top Rated Movies section with 3 movie cards
- Oscar Winners section with 3 movie cards
- Trending Now section
- Bottom tab navigation (Home & Profile)

## Environment Setup

No special setup required. The app uses mock data by default.

## Build for Production

### Android Build

```bash
eas build --platform android
```

### iOS Build

```bash
eas build --platform ios
```

## Generate Android APK (Expo)

### Option 1: Local APK Build (Recommended)

Build a debug APK locally without using EAS Cloud.

```bash
npx expo run:android
```

Or, if using React Native CLI:

```bash
npm run android
```

> Requires Android Studio and an Android SDK installed.

---

### Option 2: Build APK with EAS (Recommended for Sharing)

1. Install the EAS CLI

```bash
npm install -g eas-cli
```

2. Login to your Expo account

```bash
eas login
```

3. Configure EAS (first time only)

```bash
eas build:configure
```

4. Build an Android APK

```bash
eas build --platform android --profile preview
```

> The **preview** profile generates an APK suitable for testing and sharing.

If you don't already have a preview profile, add this to `eas.json`:

```json
{
	"build": {
		"preview": {
			"distribution": "internal",
			"android": {
				"buildType": "apk"
			}
		},
		"production": {
			"autoIncrement": true
		}
	}
}
```

5. After the build finishes, Expo will provide a download link for the generated APK.

---

### Generate an Android App Bundle (.aab)

For publishing to the Google Play Store:

```bash
eas build --platform android --profile production
```

This generates an **Android App Bundle (.aab)**, which is the required format for Google Play.

## Requirements

- Node.js (v16 or higher)
- npm or yarn
- Android Studio (for Android development)
- Xcode (for iOS development)
- Expo CLI (optional)

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, please create an issue in the repository.

---

Made with React Native & Expo ❤️
