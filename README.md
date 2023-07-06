# phase 1 Independent project

# Project name:
Weather App

# Description

Users of the weather app can access and view weather data for a particular city using a straightforward online application. Based on the user's input, the app uses the OpenWeatherMap API to retrieve real-time weather information.

The program launches an event listener that executes the getWeatherData function once a user inputs a city name and submits the form. Using the city name and API key inputs, this function creates the API URL. Following that, it makes a request of the OpenWeatherMap API and waits for a reply.

The displayWeatherData function is called when the weather data has been returned by the API. From the API response, this method pulls the pertinent data, such as the city name, the temperature in Celsius, and the current weather. Then, it updates dynamically.

## Features

- Fetches weather data from an external API (OpenWeatherMap) based on the user's input city.
- Displays the current temperature and weather condition for the provided city.
- Supports temperature units in Celsius.

## Technologies Used

- HTML
- CSS
- JavaScript

## Set-up Instructions

To run the Weather App locally, follow these steps:

1. Clone the repository:
2. Open the project folder:
3. Open the `index.html` file in your preferred web browser.
4. Input the city name in order to get the current weather of the city
5. On your screen you will see the current weather of the city
6. Incase of an incorrect input you will get a prompt message that the input is invalid

## Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The current temperature and weather condition for the specified city will be displayed.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.

# Author
The project was developed by Catherine Mathenge.