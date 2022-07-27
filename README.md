# Grub On Wheels

📱 A Food delivery service mobile application that simulates the functionality of modern Food delivery applications.

## Preview

<img src="./doc/delivery-app.gif">

## 1. Tech Stack

✨ React Native - A Javascript library for building native user interfaces

✨ Tailwindcss React Native - A utility-first CSS framework

✨ Redux - A predictable state container for JavaScript applications

✨ Sanity - A headless Content Management System

✨ React Native Maps - A Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android

✨ Google Directions API - A web service that uses an HTTP request to return JSON formatted directions between locations

✨ Google Distance Matrix API - Provides travel distance and time for a matrix of origins and destinations

## 2. React Native Setup

You will need to install the expo cli in order to run the app. You may run the app via the expo app on either iOS or Android, or use an emulator.

```
npm install --global expo-cli
```

Clone the project, install the dependencies, and run the app

```
npm install
```

## 3. Sanity Setup

Next, you will need to setup your own sanity to request data from. Install the sanity cli by running the following command:

```
npm install --global @sanity-cli
```

It is important to note that you must have a sanity account in order to proceed with the setup. You can sign up for an account [here](https://www.sanity.io/). Then navigate to the sanity folder and install the dependencies then start the server.

```
cd sanity
npm install
sanity start
```

Open up the localhost:3333 and start entering your custom data.

## 4. ENV Setup

You will need two api keys to successfully run this app. The first key is your Sanity project ID which you can obtain through your Sanity project's dashboard. The second key is from Google Cloud and you can obtain the key [here](https://console.cloud.google.com/). Create a new project and enable "Destination "and "Distance Matrix" API. Once you obtain your project ID and Google API key, create a <code>.env</code> in the root directory of your project and paste the following variables:

```
REACT_APP_SANITY_KEY=your_project_id
GOOGLE_MAPS_API_KEY=your_google_api_key
```

Once you complete the setup, you can start the app.

```
expo start
```

## TODO

- ❌ Implement a login and sign up page
- ❌ Create a user profile page
- ❌ Implement a payment system
- ❌ Implement a Map support on web
- ❌ Create a bottom navigation for the home page, order page, and past order
