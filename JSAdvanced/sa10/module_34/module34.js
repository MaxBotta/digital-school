//Synchrone/asynchrone Programmierung
async function fetchTemperature() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.5244&longitude=13.4105&current=temperature_2m&forecast_days=1"
  );

  const data = await response.json();
  return data;
}

async function getCurrentTemp() {
  const data = await fetchTemperature();

  const tempElmt = document.getElementById("temp");
  tempElmt.innerHTML = data.current.temperature_2m;
}
