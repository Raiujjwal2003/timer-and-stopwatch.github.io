// Get elements
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

// Set initial values
let startTime;
let interval;
let lapCount = 0;

// Format time value
function formatTime(time) {
  let milliseconds = String(time % 1000).padStart(3, '0');
  let seconds = String(Math.floor(time / 1000) % 60).padStart(2, '0');
  let minutes = String(Math.floor(time / 60000) % 60).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

// Start the stopwatch
function start() {
  // Set start time
  startTime = Date.now() - (interval || 0);
  // Start interval
  interval = setInterval(() => {
    // Calculate elapsed time
    let elapsedTime = Date.now() - startTime;
    // Update display
    display.textContent = formatTime(elapsedTime);
  }, 10);
  // Disable start button
  startBtn.disabled = true;
}

// Stop the stopwatch
function stop() {
  // Stop interval
  clearInterval(interval);
  // Enable start button
  startBtn.disabled = false;
}

// Reset the stopwatch
function reset() {
  // Stop interval
  clearInterval(interval);
  // Reset display
  display.textContent = '00:00:000';
  // Reset lap count
  lapCount = 0;
  // Clear laps
  lapsList.innerHTML = '';
  // Enable start button
  startBtn.disabled = false;
}

// Record a lap
function lap() {
  // Increment lap count
  lapCount++;
  // Create lap element
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${lapCount}: ${display.textContent}`;
  // Add lap to list
  lapsList.appendChild(lapItem);
}


const clearLapsBtn = document.getElementById("clear-laps-btn");


clearLapsBtn.addEventListener("click", function() {
  // Clear all laps from the list
  lapsList.innerHTML = "";
});

// Add event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);




  let countdown;

function startTimer() {
  const timeInput = document.getElementById("time-input");
  const minutesDisplay = document.getElementById("minutes");
  const secondsDisplay = document.getElementById("seconds");
  const startTime = new Date().getTime();
  const endTime = startTime + timeInput.value * 1000;
  
  countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endTime - now;
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    minutesDisplay.innerText = padNumber(minutes);
    secondsDisplay.innerText = padNumber(seconds);
    
    if (timeLeft < 0) {
      clearInterval(countdown);
      minutesDisplay.innerText = "00";
      secondsDisplay.innerText = "00";
      alert("Time's up!");
    }
  }, 1000);
}

function padNumber(num) {
  return num.toString().padStart(2, "0");
}
