// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName)
console.log(typeof shuttleSpeed)
console.log(typeof distanceToMars)
console.log(typeof distanceToMoon)
console.log(typeof milesPerKilometer)
// Calculate a space mission below
let hoursToMars = distanceToMars * milesPerKilometer / shuttleSpeed;
// Print the results of the space mission calculations below
console.log("It will take",spaceShuttleName,hoursToMars,"hours to reach mars. Or",hoursToMars/24,"days.")
// Calculate a trip to the moon below
let tripToMoon = distanceToMoon * milesPerKilometer / shuttleSpeed
// Print the results of the trip to the moon below
console.log("It will take",spaceShuttleName,tripToMoon,"hours to reach the moon. Or",tripToMoon/24,"days.")