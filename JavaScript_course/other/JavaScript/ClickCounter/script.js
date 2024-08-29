
let millisElmt = document.getElementById("millis");
let secondsElmt = document.getElementById("seconds");
let minutesElmt = document.getElementById("minutes");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timeList = document.getElementById("time-list");

stopBtn.classList.add("gray");
startBtn.classList.add("gray");

let millis = 0;
let seconds = 0;
let minutes = 0;

let interval = null;

let times = [];


function start() {
    if (interval === null) {
        interval = setInterval(setTime, 10);
    }

    startBtn.classList.remove("gray");
    stopBtn.classList.add("gray");
}

function stop() {
    clearInterval(interval);
    interval = null;
    stopBtn.classList.remove("gray");
    startBtn.classList.add("gray");
}

function reset() {
    clearInterval(interval);
    interval = null;

    times.push({ millis: millis, seconds: seconds, minutes: minutes });
    timeList.innerHTML = "";
    
    for(let time of times) {
        let li = document.createElement("li");
        let text = `  <h3>
                        <span> ${time.minutes} </span>:
                        <span> ${time.seconds} </span>:
                        <span> ${time.millis} </span>
                    </h3>`;
        li.innerHTML = text;
        timeList.appendChild(li);
    }

    millis = 0;
    seconds = 0;
    minutes = 0;
    millisElmt.innerText = "00";
    secondsElmt.innerText = "00";
    minutesElmt.innerText = "00";

    stopBtn.classList.add("gray");
    startBtn.classList.add("gray");
}

function setTime() {
    millis += 10;

    millisElmt.innerText = millis.toString().substring(0, 2);

    if (millis === 1000) {
        millis = 0;
        seconds++;
        secondsElmt.innerText = seconds.toString().padStart(2, "0");
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        minutesElmt.innerText = minutes.toString().padStart(2, "0");
    }

}