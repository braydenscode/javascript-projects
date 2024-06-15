console.log(typeof "17");
console.log(typeof "3.2");

console.log(typeof 'This is a string');
console.log(typeof "And so is this");

console.log("Bruce's beard");
console.log(typeof String(12345));
console.log(Number('3'))
console.log(Number('three'))
console.log(Number('3 3'))
console.log(Number('33'))

let programmingLanguage;
programmingLanguage = "Javascript";
console.log(programmingLanguage)

let day = "Thursday";
console.log(day);

day = "Friday";
console.log(day);

day = 21;
console.log(day);

const input = require('readline-sync');

let num1 = Number (input.question("Enter a number: "))
let num2 = Number (input.question("Enter another number: "));

console.log(num1 + num2);


let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);
/* let firstName = input.question("Enter your first name: ");
let lastName = input.question("Enter your last name: ");

console.log("Hello, " + firstName,lastName + "!");
console.log("First name:" + firstName);
console.log("Last name:" + lastName);
console.log("Last, First:" + lastName + ", " + firstName); */