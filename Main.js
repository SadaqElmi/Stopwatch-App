const startBtn = document.querySelector(".startBtn");
const StopBtn = document.querySelector(".stopBtn");
const restBtn = document.querySelector(".resetBtn");

startBtn.addEventListener("click", start);
StopBtn.addEventListener("click", stop);
restBtn.addEventListener("click", stopTime);

let second = 0;
let minutes = 0;
let hour = 0;
let isRunning = false;
let interval;

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
  } else if (minutes === 60) {
    minutes = 0;
    hour++;
  }
  display();
}

function stop() {
  clearInterval(interval);
  isRunning = false;
}

function stopTime() {
  stop();
  let second = 0;
  let minutes = 0;
  let hour = 0;
  let isRunning = false;
  display();
}

function display() {
  const displayBtn = document.querySelector(".display");

  displayBtn.textContent = `${formatTime(hour)}:${formatTime(
    minutes
  )}:${formatTime(second)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time} ` : time;
}
