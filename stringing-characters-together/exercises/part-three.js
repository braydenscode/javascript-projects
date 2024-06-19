//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0) + (language.charAt(4)));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${language.charAt(0) + language.charAt(4)}.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log (`${language.charAt(5)}${language.charAt(1)}${language.charAt(2)}${language.charAt(7)}${language.charAt(1)}${language.charAt(6)}`);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(`${(notTitleCase.charAt(0).toUpperCase())+(notTitleCase.slice(1,5))} ${(notTitleCase.charAt(6).toUpperCase())+(notTitleCase.slice(7,10))}`);
