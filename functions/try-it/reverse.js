function reverse(str) {
   let lettersArray = str.split('').reverse();
   return lettersArray.join('');
}

console.log(reverse('reverse'));