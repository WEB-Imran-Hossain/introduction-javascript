// practice problem 1
var fruits = ["Apple", "Banana", "Orange"];

// find the index banana
var bananaIndex = fruits.indexOf ("Banana");
console.log(bananaIndex);
// replace banana with mango
if(bananaIndex !== -1) {
    fruits[bananaIndex] = "Mango";
}
console.log(fruits);

// remove orange and added watermelon
fruits.pop("Orange");
fruits.push("Watermelon");
console.log(fruits);



// practice problem 3
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + "is the largest number");
}

else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + "is the largest number");
}

else {
    console.log(num3 + "is the largest number");
}


// practice problem 4
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("triangle is isosceles");
}

else {
    console.log("triangle is not isosceles");
}




// special task 1 (input 1st position number)
var age = [50, 35, 70, 40];
age.unshift(10, 20);

console.log(age);

// special task 2 (remove 1st number)
var age = [50, 35, 70, 40];
age.shift(50);

console.log(age);
