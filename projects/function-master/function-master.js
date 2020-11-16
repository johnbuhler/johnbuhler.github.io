//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object and return the values in an array//
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object and return its keys as a string seperated by a space//
function keysToString(object) {
    Object.keys(object);
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object and return its string values in a string seperated by a space//
function valuesToString(object) {
   //created a variable values and assign to an empty array//    
   let values = [];
   for (let key in object) {
       //check to see if objects keys are a string//
       //if yes, push into values array//
       if (typeof object[key] === 'string') {
           values.push(object[key]);
       }
   }
   //returned the values array with each string seperated with a space//
   return values.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//takes an argument and determine whether the collection is an array or an object//
function arrayOrObject(collection) {
    //checks to see if collection is an array//
    //if yes, returns 'array'//
    if(Array.isArray(collection)){
     return 'array';
   //checks to see if collection is an object//
   //if yes, returns 'object'//
 } else if(typeof collection === "object" && !Array.isArray(collection) && collection !== null && !(collection instanceof Date)){
     return 'object';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take a string of one word and return it with the first letter capitalized//
function capitalizeWord(string) {
    //use toUpperCase() to capitalize//
    //use charAt() to indicate the index of the first letter//
    //use .slice to extract the updated part of the string//
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take a string of words and return a string with the first letter of each word capitalized//
function capitalizeAllWords(string) {
    //create a variable capFirst that takes the string in lowercase and seperates the string//
    let capFirst = string.toLowerCase().split(" ");
    //loop through the string//
    for (let i = 0; i < capFirst.length; i++){
        //use toUpperCase() to capitalize//
        //use charAt() to indicate the index of the first letter//
        //use substr() to return the portion of the string at the given index//
        capFirst[i] = capFirst[i].charAt(0).toUpperCase() + capFirst[i].substr(1);
    }
    //return the new string with each word seperated with a space//
    return capFirst.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object with a name property return a welcome message//
//edge case?: make sure the first letter of name is capitalized//
function welcomeMessage(object) {
    //create a variable newStr//
    //take the object name and capitalize the first letter//
    //use .slice() to take the object name portion from the object//
    let newStr = Object.values(object["name"].charAt(0).toUpperCase() + object["name"].slice(1));
    //use a template literal to return the welcome message//
    //use .join() to rejoin the string// 
    return `Welcome ${newStr.join("")}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object with a name and a species and return '<name> is a <species>'//
//edge case?: make sure first letter of both name and species is capitalized//
function profileInfo(object) {
    //create two variables, varName and varSpecies//
    //take the object name and object species and capitalize the first letter of both//
    //slice the name and species portion from the object//
    let varName = Object.values(object["name"].charAt(0).toUpperCase() + object["name"].slice(1));
    let varSpecies = Object.values(object["species"].charAt(0).toUpperCase() + object["species"].slice(1));
    //use a template literal to return the message//
    //rejoin the strings//
    return `${varName.join("")} is a ${varSpecies.join("")}`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object and if it has a noise array, return as a string seperated by a space//
//if not then return 'there are no noises'//
function maybeNoises(object) {
     if (object && object.noises) { 
        //statement that sees if the array contains an array of noises within the object//
        if (Array.isArray(object.noises)) { 
            //statement that sees if the noises array is empty//
            if (object.noises.length > 0) { 
                //return the noises array with .join//
                return object.noises.join(' ');
            }
        }
    }
    //return 'there are no noises' if the noises array is empty//
    return 'there are no noises';    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//takes a string of words and return true if the word is in the string of words//
//return false otherwise//
function hasWord(string, word) {
    //loop through the string//
    for (var i = 0; i < string.length; i++) {
      //statement that sees if the indicated word is in the string of words//    
      if(string.match(word)) {
        return true;
    }
        return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take a name and object then add the name to the objects friend array//
//return the object//
function addFriend (name, object) {
    //pushes the name to the objects friends array//
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take a name and object and return true if name is a friend of the object//
//return false otherwise//
function isFriend(name, object) {
  //statement that sees if the object contains an array of friends and if object has a property of friends//    
  if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
    //loop through the objects friends//
    for(var i = 0; i < object.friends.length; i++) {
      //statement that checks to see if the indicated name is on the objects friends array//
      if(name === object.friends[i]) {
        return true;  
      }
    }    
  }  
 return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//did in class//
//create a nonFriends array to be returned at the end after my logic//
//input: name <strings> && array <full of objects>//
//output: array full of all the non friends of the name argument//
//C: must look through array of objects and find that name argument and then using the person friends array use that and loop again through the array of objects and see who isn't in the friends of array of that person//
    let notFriends = [];
    //loop through the array of objects//
    for (let i = 0; i < array.length; i++) {
    //must look through array of objects and find that name argument//
    //check the object name does not match the name and loop with includes method through//
         if ((array[i]['name'] !== name) && !array[i]['friends'].includes(name))  {
        //then push the not friend into not friends//
            notFriends.push(array[i]['name']);
  }
}
//after done with logic we will return notFriends array//
return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object, a key and a value//
//update the key property on the object with a new value//
//create the key if it does not exist on the object//
function updateObject(object, key, value) {
    //statement that checks to see if the object has the key property//
    if (object.hasOwnProperty(key) === Object.keys(object)){
      //return the updated key property//
      return object[key];
    } else {
      //add the object key to the value//
      object[key] = value;
    }
    //return the updated object//
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an object and an array of strings//
//remove any properties on object that are listed in the array//
function removeProperties(object, array) {
    //loop through the objects keys//
    for (var key in object) {
        //loop through the array//
        for (let i = 0; i < array.length; i++) {
         //statement that checks to see if the key exists in the array//
         if (key === array[i]) {
            //delete the key// 
            delete object[key];
        }
       
    }
    
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take an array and return the array with all duplicates removed//
function dedup(array) {
    //use filter() to check if//
    //use indexOf() to check for the first instance of the given index//
    return array.filter((a, b) => array.indexOf(a) === b);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}