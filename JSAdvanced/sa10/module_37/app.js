// Wetter App

import { fetchData } from "./fetchData.js";

const weatherRow = document.getElementById("weather-row")

const cities = {
  berlin: {
    latitude: 52.5244,
    longitude: 13.4105,
  },
};

async function main() {
  const data = await fetchData(cities.berlin.latitude, cities.berlin.longitude);
  console.log(data);
  
  const hourlyTemp = data.hourly.temperature_2m;
  const hourlyTimes = data.hourly.time;

  for (let i = 0; i < hourlyTimes.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box")
    const date = new Date(hourlyTimes[i])
    newDiv.innerText = date.getDate() + ":" + date.getHours() + ": " + hourlyTemp[i] + "C";
    weatherRow.appendChild(newDiv);
  }
}

main();
