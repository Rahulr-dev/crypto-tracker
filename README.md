# CryptoSearch - Cryptocurrency Price Tracker

`CryptoSearch` is a React-based cryptocurrency price tracker that allows users to search for cryptocurrencies, view their prices in multiple currencies (USD, EUR, GBP, INR, CHF), and manage recent searches.

## Features
- **Search Cryptocurrencies**: Search for cryptocurrencies by name.
- **Currency Selection**: Choose the currency to view prices in (USD, EUR, GBP, INR, CHF).
- **Recent Search**: View a list of recent search terms and quickly access them.
- **Error Handling**: Displays user-friendly error messages for API rate-limiting and other issues.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [API Rate Limiting](#api-rate-limiting)
5. [Error Handling](#error-handling)


## Installation

To run this project locally, follow these steps:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (to manage dependencies)

### Steps

1. Clone the repository:

    ```bash
    git clone git@github.com:Rahulr-dev/crypto-tracker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd crypto-tracker
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## Usage

1. **Search Cryptocurrencies**: Start typing in the search bar to find cryptocurrencies by name.
2. **Currency Selection**: Choose a currency (USD, EUR, GBP, INR, CHF) from the dropdown to view prices in your selected currency.
3. **Refresh**: Click the refresh button to reload the cryptocurrency data.
4. **Recent Searches**: View your recent search history (if applicable).

## Features

- **Multiple Currencies**: Supports USD, EUR, GBP, INR, and CHF.
- **Real-Time Cryptocurrency Data**: Fetches the latest data from a public API.
- **Error Messages**: Gracefully handles API errors, especially rate-limiting errors (HTTP 429), and provides user-friendly messages.

## API Rate Limiting

The app fetches cryptocurrency data from a public API. If too many requests are made in a short period (rate-limiting), a **429 Too Many Requests** error will be returned. The app handles this gracefully by showing a message like:

> "Too many requests. Please wait a moment before trying again."

This error will not cause the app to crash or stop functioning. Users can try again after waiting a moment.

## Error Handling

If an error occurs while fetching the data, the application handles it as follows:
- **Rate Limiting (HTTP 429)**: Displays a user-friendly message: "Too many requests. Please wait a moment before trying again."
- **General Errors**: Displays a generic message: "An error occurred while fetching cryptocurrencies."

The app will continue to function without crashing, even in the event of an error.


