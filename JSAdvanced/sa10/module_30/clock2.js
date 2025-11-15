const clockElement = document.querySelector("#clock");
let currentAlertTime = null;

function setCurrentTime() {
  const now = new Date();
  clockElement.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

function setAlert(value) {
  // split hours and minutes into seperate entries in a list
  const splittedTime = value.split(":");
  const hours = splittedTime[0];
  const minutes = splittedTime[1];

  // Legen ein Neues date Objekt an
  currentAlertTime = {
    hours: parseInt(hour),
    minutes: parseInt(minute),
  };
}

function checkAlerts() {
  // if no alert is set leave the function
  if (!currentAlertTime) return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (
    currentAlertTime.hours === hours &&
    currentAlertTime.minutes === minutes
  ) {
    // reset alerttime
    currentAlertTime = null;

    // show alert to user
    alert("ALARM!!!!");
  }
}

setInterval(function () {
  setCurrentTime();
  checkAlerts();
}, 1000);
