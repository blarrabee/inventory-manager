


const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


// create date object with curent date and time
var date = new Date();

// log date and time to console
console.log("current date:" + date);

// create three variables to hold minutes hours and seconds seperately
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// log curent hour minute and second to the console
console.log("Hour: " + hr + "Minute: " + min + "Sec" + sec);
// create variables that contain math for the position on a circle the hands will rest
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

// function to run clock to next interval
function runTheClock() {

  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform = "rotate(" +minPosition + "deg)"
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"


}
// call function every second
var interval = setInterval(runTheClock, 1000);
