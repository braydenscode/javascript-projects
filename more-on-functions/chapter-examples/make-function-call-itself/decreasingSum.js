function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      console.log(integer);
      return decreasingSum(integer-1);
   }
}

console.log(decreasingSum(5));
