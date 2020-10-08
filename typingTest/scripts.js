let timerRunning = false;


function leadingZero(timer) {
  if (timer <= 9){
    timer = "0" + timer;
  }
  return timer;
}


timer = [0,0,0,0];

function runTimer(){
  let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
  theTimer.innerHTML = timer;
  timer[3]++
  timer
}

function spellCheck(){
  let textEntered = testArea.value;

  console.log(textEntered);
}

function start() {
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0) {
    setInterval(runTimer, 10);
  }
  console.log(textEnteredLength);
}

function reset() {
  console.log("reset button has been pressed!");
}
