function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 console.log('-----------');
 for(i=0; i < 3; i++) {
  console.log(`From happiness: ${randomSelection(happiness)}. From words: ${randomSelection(words)}.`);
 }
 console.log('-----------');
 let arraySquared = [happiness, words];
 let array = (randomSelection(arraySquared));
 for (i = 0; i < arraySquared.length;i++) {
 console.log(randomSelection(array));
 }
console.log('-----------');
 let randomArray = [happiness[Math.floor(Math.random()*happiness.length)], words[Math.floor(Math.random()*words.length)]];
 console.log(randomArray);