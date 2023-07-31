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
    console.log(`${myName} Grade: A`);
}

else if (imran >= 60) {
    console.log(`${myName} Grade: B`);
}

else if (imran >= 50) {
    console.log(`${myName} Grade: C`);
}

else if (imran >= 40) {
    console.log(`${myName} Grade: D`);
}

else if (imran >= 39) {
    console.log(`${myName} Grade: F`);
}


// tom result
if (tom >= 80) {
    console.log(`${tomName} Grade: A`);
}

else if (tom >= 60) {
    console.log(`${tomName} Grade: B`);
}

else if (tom >= 50) {
    console.log(`${tomName} Grade: C`);
}

else if (tom >= 40) {
    console.log(`${tomName} Grade: D`);
}

else if (tom >= 39) {
    console.log(`${tomName} Grade: F`);
}


// jane result
if (jane >= 80) {
    console.log(`${janeName} Grade: A`);
}

else if (jane >= 60) {
    console.log(`${janeName} Grade: B`);
}

else if (jane >= 50) {
    console.log(`${janeName} Grade: C`);
}

else if (jane >= 40) {
    console.log(`${janeName} Grade: D`);
}

else if (jane >= 39) {
    console.log(`${janeName} Grade: F`);
}


// peter result
if (peter >= 80) {
    console.log(`${peterName} Grade: A`);
}

else if (peter >= 60) {
    console.log(`${peterName} Grade: B`);
}

else if (peter >= 50) {
    console.log(`${peterName} Grade: C`);
}

else if (peter >= 40) {
    console.log(`${peterName} Grade: D`);
}

else if (peter >= 39) {
    console.log(`${peterName} Grade: F`);
}

// john result
if (john >= 80) {
    console.log(`${johnName} Grade: A`);
}

else if (john >= 60) {
    console.log(`${johnNamee} Grade: B`);
}

else if (john >= 50) {
    console.log(`${johnName} Grade: C`);
}

else if (john >= 40) {
    console.log(`${johnName} Grade: D`);
}

else if (john >= 39) {
    console.log(`${johnName} Grade: F`);
}


// practice problem 5

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