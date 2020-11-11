/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//created a variable animal and assigned it to an empty object//
var animal = {};

//used dot notation to a add a property of species to the animal object and assigned it//
animal.species = "dog";

//used bracket notation to add a property of name to the animal object and assigned it//
animal['name'] = "Jean-Baptiste";

//used dot notation to to add a porperty of noises as an empty array to the animal object//
animal.noises = [];

//console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//created a var noises and assigned it to an empty array//
var noises = [];

//used bracket notation to add a noise to the noises array at the first index (0)//
noises[0] = 'woof woof';

//used push to add another noise to the noises array//
noises.push('bark bark');

//used unshift to add another noise to the beginning of the array//
//this made the noise 'woof woof' the second index (1) in the noises array//
noises.unshift('arf arf');

//used bracket syntax to add another noise to the noises array//
noises[noises.length] = 'grrr';

//console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//used bracket syntax to assign the animal noises property to the new noises array//
animal['noises'] = noises;

//added another noise to the noises array//
animal['noises'].push('ruff ruff');

//console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck); //pushed duck to the animals array
console.log(animals);


var monkey = { species: 'monkey', name: 'Hrothgar', noises: ['ooo ooo aah aah', 'scream'] };
var pig = { species: 'pig', name: 'Pablo', noises: ['oink', 'snort'] };

animals.push(monkey);
animals.push(pig);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//created a variable friends and assigned it to an empty array

var friends = [];

//created a function getRandom() that takes our animals array and returns a random index of the input array, using Math.random


function getRandom(array) {
    return Math.floor(Math.random() * array.length);
    
}


//took a random animal from the getRandom function and added it to friends

animals[getRandom(animals)];
friends.push(animals[getRandom(animals)].name);

console.log(friends);

duck['friends'] = friends;

console.log(duck);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}