/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//implemented a function search() that looks through the animals array using a for loop//
//within the for loop of the function, made an if statement that says if an animal with that name exists, return animal's object//
//if no animal with that name exists, returns null//

function search(array, name) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return array[i];
        }
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//created a function replace() that takes 3 parameters: 
/* 1. animals = Array of animals; 
 * 2. name = String representing an animal name to search;
 * 3. replacement = Object that represents the replacement animal
 */

//within the function, used a for loop to go through the animals array//
//used an if statement that says if an animal with that name exists, replace its entire object with the replacement object//

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i] = replacement;
        }
}

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function remove that loops through the animals array//
//if the name of the animal already exists within the array, remove it//

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            //used splice to remove the animal name at its index//
            return animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declared a function add() with the parameters of animals representing the array of animals, and animal which is an Object representing a new animal to be added//
//used an if statement that checks if both name and species have a length greater than zero//
//used another if statement that checks if the name is unique//
//this new object is added to the animals array only if all the other conditions pass//

function add(animals, animal) {
     if(animal.name.length > 0 && animal.species.length > 0) {
        if(!search(animals, animal.name)) {
            animals.push(animal);
            }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
