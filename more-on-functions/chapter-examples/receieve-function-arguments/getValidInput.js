const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function(a) {
  if ('a' != a.slice(0, 1).toLowerCase()) {
    return false;
  }
  return true;
}
// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function (letter) {
  if (letter.toLowerCase === 'a'||'e'||'i'||'o'||'u') {
    return true;
  }
  return false;
}
// Be sure to test your code!
console.log(getValidInput('Give an input starting with a: ', startsWithA));
console.log(getValidInput('Provide a vowel: ', isVowel));