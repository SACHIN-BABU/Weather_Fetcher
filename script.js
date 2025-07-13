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
