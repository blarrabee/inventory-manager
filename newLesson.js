const MYCONSTANT = 5;
console.log(MYCONSTANT);


var course = new Object();

course.title = "javascript training";
course.instructor = "blaise";
course.level = 2;

console.log(course);

function Course(title,instructor,level,published,views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  };
}

var courses = [


]


var course01 = new Course("Javasript", "blaise", 1, true, 0);

console.log(course01);

function doSomeMath(){
  var a = 5;
  var b = 4;
  var sum = a + b;

  return sum;
}

var theResult = doSomeMath();

console.log('the result: ', theResult);

function giveMeEms(pixles) {
  var baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  }

  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small Size:" + smallSize);
console.log("medium Size:" + mediumSize);
console.log("large size:" + largeSize);
console.log("x large size:" + xlargeSize);
