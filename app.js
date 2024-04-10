const input = document.querySelector(".inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weatherImg");
const areaTemp = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const notFound = document.querySelector(".notFound");
const weatherBody = document.querySelector(".weatherBody");

async function getWeather(city) {
  let apiKey = "e4c33e103c7cbeee7378ceea10f4d316";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const weatherData = await fetch(`${url}`).then((response) => response.json());
  if (weatherData.cod === "404") {
    notFound.style.display = "flex";
    weatherBody.style.display = "none";
    return;
  }
  weatherBody.style.display = "flex";
  notFound.style.display = "none";
  console.log(weatherData);
  areaTemp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  windSpeed.innerHTML = `${weatherData.wind.speed} Km/H`;
  switch (weatherData.weather[0].main) {
    case "Clouds":
      weatherImg.src = "/assests/cloud.png";
      break;
    case "Clear":
      weatherImg.src = "/assests/clear.png";
      break;
    case "Mist":
      weatherImg.src = "/assests/mist.png";
      break;
    case "Snow":
      weatherImg.src = "/assests/snow.png";
      break;
    case "Rain":
      weatherImg.src = "/assests/rain.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(input.value);
});
