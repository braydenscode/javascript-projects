const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food,equipment,pets,sleepAids]
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCabinet = input.question("Select a cabinet in the cargo hold (0-3). ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (Number (userCabinet >=0) && Number (userCabinet <= 3)) {
    console.log(`Heres whats inside cabinet ${userCabinet}.`);
    console.log(`${cargoHold[userCabinet]}`);
    let userItem = input.question("What item would you like? ");
    if (cargoHold[userCabinet].includes(userItem) == true) {
        console.log(`Cabinet ${userCabinet} DOES contain ${userItem}`);
    } else {
        console.log(`Cabinet ${userCabinet} DOES NOT contain ${userItem}`);
    }
} else {
        console.log("Invalid cabinet input. Selection must be 0-3.");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
