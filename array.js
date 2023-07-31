// practice problem 1
var fruits = ["Apple", "Banana", "Orange"];

// find the index banana
var element = fruits [1];
// replace with mango
fruits [1] = "Mango"
console.log(fruits);

// remove orange and added watermelon
var element = fruits [2];
fruits [2] = "Watermelon";
console.log(fruits);



// practice problem 2

// introduce name
myName, tomName, janeName, peterName, johnName
var myName = "Imran"
var tomName = "Tom"
var janeName = "Jane"
var peterName = "Peter"
var johnName = "John"

// individual marks
var imran = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 45;

// imran result
if (imran >= 80) {
    console.log("${myName} got A");
}

else if (imran >= 60) {
    console.log("${myName} got B");
}

else if (imran >= 50) {
    console.log("${myName} got C");
}

else if (imran >= 40) {
    console.log("${myName} got D");
}

else if (imran >= 39) {
    console.log("${myName} got F");
}














































































// practice problem 4

// all students average marks
var students = [["Imran", 85], ["Tom", 66], ["Jane", 95], ["Peter", 56], ["John", 40],];
var avgMarks = 0;

for (var i=0; i <students.length; i++) {
    avgMarks += students[i][1];
    var avg = (avgMarks/students.length);
}

console.log("average grade:" + (avgMarks)/students.length);

if (avg < 39) {
    console.log("Grade: F");
}

else if (avg < 40) {
    console.log("Grade: D");
}

else if (avg < 50) {
    console.log("Grade: C");
}

else if (avg < 60) {
    console.log("Grade: B");
}

else if (avg < 70) {
    console.log("Grade: A");
}

else if (avg < 80) {
    console.log("Grade: A+");
}