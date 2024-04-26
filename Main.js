let second = 0;
let minutes = 0;
let hour = 0;
let isRunning = false;
let interval;

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Check if there is a saved time in localStorage
if (localStorage.getItem("stopwatchTime")) {
  const savedTime = JSON.parse(localStorage.getItem("stopwatchTime"));
  hour = savedTime.hour;
  minutes = savedTime.minutes;
  second = savedTime.second;
  display();
}

function start() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(updateTime, 1000);
  }
}

function updateTime() {
  second++;
  if (second === 60) {
    second = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hour++;
  }
  display();
}

function stop() {
  clearInterval(interval);
  isRunning = false;
  // Save the current time to localStorage
  saveTime();
}

function reset() {
  stop();
  second = 0;
  minutes = 0;
  hour = 0;
  display();
  // Clear the saved time from localStorage
  localStorage.removeItem("stopwatchTime");
}

function display() {
  const displayBtn = document.querySelector(".display");
  displayBtn.textContent = `${formatTime(hour)}:${formatTime(
    minutes
  )}:${formatTime(second)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function saveTime() {
  // Save the current time to localStorage
  localStorage.setItem(
    "stopwatchTime",
    JSON.stringify({ hour: hour, minutes: minutes, second: second })
  );
}
