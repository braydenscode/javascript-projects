//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
console.log(element1);
console.log(element2);
console.log(element26);
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);
//Printing with the first index only prints the entire row, whereas printing with 2 indexs prints only that entry (think of it as coordinates or a spreadsheet)
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2],table[1][0],table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
console.log(table);
console.log(table.toString());
let allElements = [[element1],[element2],[element26]];
elements = allElements.toString();
let table3d = [allElements, table];
console.log('-------------------------Level 4---------------------');
console.log(table3d);
console.log('-------------------------Level 3---------------------');
console.log(table3d[0]);
console.log('-------------------------Level 2---------------------');
console.log(table3d[1][2]);
console.log('-------------------------Level 1---------------------');
console.log(table3d[1][2][2]);