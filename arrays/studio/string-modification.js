const input = require('readline-sync');
let str = "LaunchCode";
let userAnswer = input.question('How many characters should we move? ');
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
if (userAnswer <= str.length && userAnswer >= 0) {
    let str1 = str.slice(userAnswer) + str.slice(0,userAnswer);
    console.log(`${str} changed to ${str1}`);
} else {
    str1 = str.slice(3) + str.slice(0,3)
    console.log(`Answer defaulted to 3 because user input is invalid. ${str} changed to ${str1}`);
}



//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
