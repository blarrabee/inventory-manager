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
