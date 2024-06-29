let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
let halfThisNumber = function (n) {
    n = n/2;
    return n;
};
// and pass it to .map()
let halved = nums.map(halfThisNumber);

console.log(halved);
