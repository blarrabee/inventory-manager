let timerRunning = false;

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var interval;

var timer = [0,0,0,0];


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  if (time <= 9){
    time = "0" + time;
  }
  return timer;
}


// Run a standard minute/second/hundredths timer:
function runTimer(){
  let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
  theTimer.innerHTML = timer;
  timer[3]++
  timer
}


// Match the text entered with the provided text on the page:
function spellCheck(){
  let textEntered = testArea.value;

  console.log(textEntered);
}


// Start the timer:

function start() {
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer, 10);
  }
  console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
