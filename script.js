import apiKey from './config.js';
// Function to fetch weather data from an API
async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === '404') {
      throw new Error('City not found');
    }

    return data;
  } catch (error) {
    console.log('Error:', error);
    displayErrorMessage();
  }
}

// Function to display weather information on the page
function displayWeatherData(weatherData) {
  const cityName = weatherData.name;
  const temperature = weatherData.main.temp;
  const condition = weatherData.weather[0].description;

  const weatherInfo = document.querySelector('#weather-info');
  weatherInfo.innerHTML = `
    <h2>Weather in ${cityName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${condition}</p>
  `;
}

// Function to display error message
function displayErrorMessage() {
  alert('Invalid input. Please enter a valid city.');
}

// Event listener for form submission
const form = document.querySelector('#weather-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const cityInput = document.querySelector('#city-input');
  const city = cityInput.value;

  const weatherData = await getWeatherData(city);
  if (weatherData) {
    displayWeatherData(weatherData);
  }

  // Clear input field
  cityInput.value = '';
});
