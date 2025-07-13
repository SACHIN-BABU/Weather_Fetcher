# Weather_Fetcher
## Date:11-07-2025
## Sachin B
## 212222060207

## Objetive:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WeatherNow</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>WeatherNow</h1>
    <input id="city" type="text" placeholder="Enter city name" />
    <button id="getWeather">Get Weather</button>
    <div id="weather"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to bottom, #87ceeb, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.container {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 320px;
  backdrop-filter: blur(5px);
  border: 2px solid #dfe6e9;
}

h1 {
  color: #2d3436;
  margin-bottom: 20px;
}

input {
  width: 85%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #b2bec3;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

button {
  padding: 12px 20px;
  background: #00a8ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0097e6;
}

#weather {
  margin-top: 20px;
  font-size: 16px;
  color: #2f3542;
}

#weather img {
  margin-top: 10px;
  width: 60px;
  height: 60px;
}
```
## JavaScript Code:
```
const apiKey = "56ed3caa4b814a479c5130143251307";

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("weather");

  if (!city) {
    result.textContent = "Enter a city name.";
    return;
  }

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const { name, country } = data.location;
    const { temp_c, condition } = data.current;

    result.innerHTML = `
      <strong>${name}, ${country}</strong><br>
      ${condition.text}<br>
      Temp: ${temp_c}°C<br>
      <img src="${condition.icon}" alt="Icon">
    `;
  } catch {
    result.textContent = "Unable to fetch weather.";
  }
});
```
## Output:
<img width="1919" height="852" alt="image" src="https://github.com/user-attachments/assets/3e4ccc48-b538-444e-bb02-94a88976d1bd" />


## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
