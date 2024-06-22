/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
    
//a
for (i = 0; i < 21; i++) {
  console.log(i);
}
console.log('');
//b
 for (i = 3; i <30; i = i + 2) {
  console.log(i);
}
console.log('');
//c
  for (i = 12; i > -15; i = i - 2) {
    console.log(i);
}
console.log('');
//d
let numberA = 50;
let numberB = 20;

  for (i = numberA; i >= numberB; i--) {
    if (i % 3 === 0) {
      console.log(i)
    }
  }
  console.log('');
  console.log('');

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/
let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42]
/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
//a
  for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  }
  console.log('');
//b
  let newStr = str.split('').reverse();
for (i = 0; i < newStr.length; i++) {
    console.log(newStr[i]);
  }



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
//a
let arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let arrEven = [];
let arrOdd = [];
for (i = 0; i < arr1.length; i++) {
if (arr1[i] % 2 === 0) {
  arrEven.push(arr1[i]);
} else {
  arrOdd.push(arr1[i]);
}
} 
//b
console.log(arrOdd)
console.log(arrEven)

