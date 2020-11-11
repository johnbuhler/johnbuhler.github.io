/*
* STRING MANIPULATION:
*
* 0. Strings are objects that are not stored as arrays, so functions 
* must be used to manipulate their values. 
*
* 1. String manipulation functions allow us to access the contents of 
* a string variable. 
*
*/ 




// concat() //
/*
* combines 2 or more strings and returns a new string
*
*
* var str1 = 'whats ' 
* var str2 = 'up?'
* var wholeStr = str1.concat(str2);
* console.log(wholeStr); // returns ===> 'whats up?'
*/




// length() //
/*
* used to return the number of characters a string contains 
*
* can be used to find the end characters by using -1 after
* .length
*
*
* var str = "wheres the leak ma'am?" 
* console.log(str.length); // returns ===> 21
*/




// slice() //
/*
* takes a section of a string and returns a new string 
*
* uses start and end parameters thats specifies the part of the 
* string you are trying to extract 
*
*
* var greet = 'hello there';
* var newGreet = greet.slice(0, 5);
* console.log(newGreet); // returns ===> 'hello'
*/




// substring() //
/*
* extracts characters from a string between two specified parameters
* and returns the new sub string
*
* var str = "hello there";
* var yes = str.substring(1, 4);
* console.log(yes); // returns ===> 'ell' 
*/





// split() //
/*
* splits a string into an array of string by seperating the
* string into substrings, then returns a new array 
*
* can have an optional limit parameter that specifies a 
* certain number of splits 
*
* var str = "what are you doing today?";
* var dunk = str.split(" ", 3);
* console.log(dunk); // returns ===> ['what', 'are', 'you']
*/




// toLowerCase //
/*
* converts a string to lowercase
*
* does not change the original string
*
*
* var str = "LETS GO!";
* var dunk = str.toLowerCase();
* console.log(dunk); // returns ===> 'lets go!'
*/




// toUpperCase //
/*
* converts a string to uppercase
*
* does not change the original string 
*
*
* var str = "oh yeah!";
* var dunk = str.toUpperCase();
* console.log(dunk); // returns ===> 'OH YEAH!'
*/