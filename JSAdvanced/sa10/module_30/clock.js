const clock = document.getElementById("clock");
const alertsList = document.getElementById("alerts");
let currentAlertTime = null
const alerts = []

function setTime() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}

function setCurrentAlertTime(value) {
  // set new dat ein this format 11:30
  currentAlertTime = new Date();
  const timeParts = value.split(":");
  currentAlertTime.setHours(parseInt(timeParts[0]));
  currentAlertTime.setMinutes(parseInt(timeParts[1]));
  currentAlertTime.setSeconds(0);
}

function setAlert() {
  if (currentAlertTime) {
    alerts.push(new Date(currentAlertTime));
    console.log("Alert set for " + currentAlertTime);
  }
  renderAlerts();
}

function renderAlerts() {
  alertsList.innerHTML = "";
  alerts.forEach((alertTime, index) => {
    const li = document.createElement("li");
    li.classList.add("alert-item");
    li.innerText = alertTime.getHours() + ":" + alertTime.getMinutes();
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.onclick = () => {
      deleteAlert(index);
    };
    li.appendChild(deleteButton);
    alertsList.appendChild(li);
  });
}

function deleteAlert(index) {
  alerts.splice(index, 1);
  renderAlerts();
}

// Checke jede Sekunde ob eine Alarmzeit erreicht ist
setInterval(() => {
  setTime();
  
  const now = new Date();
  alerts.forEach((alertTime, index) => {
    if (
      now.getHours() === alertTime.getHours() &&
      now.getMinutes() === alertTime.getMinutes() &&
      now.getSeconds() === alertTime.getSeconds()
    ) {
      alert("Alert! Time is " + alertTime.getHours() + ":" + alertTime.getMinutes());
    }
  });
}, 1000);