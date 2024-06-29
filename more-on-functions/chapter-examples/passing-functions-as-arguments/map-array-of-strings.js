let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
let convertToInitial = function (arr) {
    arr = arr.slice(0, 1);
    return arr;
};
// and pass it to .map()
let firstInitials = names.map(convertToInitial);

console.log(firstInitials);
