//Prompt a user twice to enter two numbers

let num1 = prompt("Please enter a number: ");

num1 = parseInt(num1);

let num2 = prompt("Please enter a second number: ");

num2 = parseInt(num2);

//this goes through and uses the number in every operation
let addition = num1 + num2;

console.log(`The numbers added equal to: ${addition}`);

let subtraction = num1 - num2;

console.log(`The numbers subtracted equal to: ${subtraction}`);

let multiplication = num1 * num2;

console.log(`The numbers multiplied equal to: ${multiplication}`);

let division = num1 / num2;

console.log(`The numbers divided equal to: ${division}`);

let exponent = num1 ** num2;

console.log(`The numbers exponentified equal to: ${exponent}`);

let modulus = num1 % num2;

console.log(`The numbers modulified equal to: ${modulus}`);

//Math.random time 

//Implement a random number generator that returns a number between 1 and 35

let randomNum = Math.floor(Math.random() * 35) + 1;

console.log(`Here is ya random number G: ${randomNum}`);
1
//Returns a floating number rounded to the nearest interger

//Generates a random Float.

//This is the precision it is 1000 so it will give the random float
//3 decimal places so it can be a little more open to rounding and gives more badazz
let precision = 1000;
let randomFloat = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);

console.log(`Random Generated Float number = ${randomFloat}`);

let roundedNum = Math.round(randomFloat);

console.log(`The random generated float rounded = ${roundedNum}`);

//Take 2 numbers from the user and use Math.pow to return the value of one variable to power of the other.
let powNum1 = prompt("Enter a number: ");

powNum1 = parseInt(powNum1);

let powNum2 = prompt("Enter a second number: ");

powNum2 = parseInt(powNum2);

let power = Math.pow(powNum1, powNum2);

console.log(`The power of the two values equals: ${power}`);


//Bonus.js

var a = prompt("Enter a number to be squared: ");

a = parseInt(a);

function squared(a) {
    return a * a;
}

console.log("The number squared is: " + squared(a));

//Skip number 19, Raymond gave the order to skip it

buggy_code = true;

function has_bugs(buggy_code) {
    if(buggy_code) {
        return 'sad days'
    } else {
        return `its a good day`
    }
}
1
console.log("Today is: " + has_bugs(buggy_code));

//returns true if a can be divided by b otherwise returns false

var a = 6;
var b = 2;

function dividesEvenly(a, b) {
    return (a % b === 0)
}

console.log("The numbers divided: " + dividesEvenly(a, b));

