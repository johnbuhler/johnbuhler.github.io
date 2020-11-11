/*
* DATA TYPES: 
*
* 0. Specifies what type of data is being stored and manipulated within a program
*
* 1. Specific basic datatypes are seperated into 3 different categories: primative (primary),
* reference (composite), and special datatypes
*
* 2. Data types that are primative are: number, string, boolean, undefined 
*/



/// NUMBER ///

/*
* The number data type is used to indicate positive or negative numbers, with or 
* without decimals, or numbers that are written in exponential notation
*
* Number data types can also include special values, such as infinity and NaN
*
* var x = 10; // ===> x has been assigned to the number 10
*/





/// STRING ///

/*
* The string data type is used as a representation of text or textual data, like 
* a sequence of characters
*
* Strings can be created using either single or double quotes surrounding one or 
* more characters, but must be consistent where used 
*
* String can also include numbers, certain special characters, arithmetic values,
* or a combination of all
*
*
* var name = 'John'; // ===> name has been assigned to the string 'John'
*/




/// BOOLEAN ///

/*
* Boolean data types hold two values: true or false
*
* They come as a result of comparisons within a program
*
* 
* boolean( 5 > 2 ); // ===> returns true
*/




/// ARRAY ///

/*
* An array is an object that is used for storing multiple values (elements)  
* within a single variable
*
* Elements in an array have a numeric position (its index), starting with 0, 
* and can contain any data types
*
* Arrays are enclosed in square brackets [], and seperates elements by a comma
*
*
* var colors = ['red', 'green', 'blue'] // ===> array created holding strings 
*
* to access certain elements in an array, use the array name and brackets 
* around the specific index
* 
* colors[1] // ===> prints 'green'
*
* Can also add elements to an array using various array methods:
* push() ===> and an element to the end of an array
* unshift() ===> adds an element to the front of the array
*
* Elements can also be removed from the array:
* pop() ===> removes the last element in the array
* shift() ===> removes the first element in the array
*/





/// OBJECT ///

/*
* An object allows you to store a collection of data
*
* Contain properties called key-value pairs consisting of a property key, which 
* is always a string, and property values, which can be any data type
*
*
* let person = {
*   firstName: 'Frank', 
*   lastName: 'Reynolds',
* }; 
*   // ===> created an object with 2 key values assigned to 2 strings
*
* Can access object properties using dot notation or bracket notation
*
* person.firstName (dot notation) or person['firstName'] (bracket notation) 
* // ===> both will return 'Frank'
*
* Can also add a property to an already existing object using dot notation
*
* person.homeTown = 'Philadelphia';
* let person = {
*   firstName: 'Frank', 
*   lastName: 'Reynolds',
*   homeTown: 'Philadelphia'
* }; 
*/





/// FUNCTION ///

/*
* A type of data that contains reusable code
*
* This contained reusable code allows us to execute that code whenever 
* it is called upon
*
* Functions are declared, which creates a variable within the current
* scope, and the variable holds the functions object 
*
* Functions have inputs called parameters, and return a output, which
* by default is undefined
*
*
* function add(num1, num2) {
*   return num1 + num2   
* }
* add(2, 2); // ===> returns 4
*/





/// UNDEFINED ///

/*
* Any object that has been declared but has not been initialized
* or defined 
*
* Array index that does not exist
*
* A function with no given parameter 
*
*
* var place;
* console.log(place); // return ===> undefined because item has not been defined 
*/





/// NULL ///

/*
* A word in JavaScript that indicates there is no value
*
* represents the intentional abscence of any object value
*
*
* var myVar = null;
*/





/// NaN /// 

/*
* Stands for 'Not a Number'
*
* signifies that there is no numerical value represented 
*/





/// INFINITY and -INFINITY ///

/*
* Infinity is a variable in a global scope that is written in a 
* numeric value representing positive infinity
*
* -Infinity represent negative infinity 
*
* Infinity and -infinity are displayed when a number exceeds the upper
* and lower limit, respectively, of what is called the floating point
* numbers
*/





/// PRIMITIVE/SIMPLE vs COMPLEX ///

// 1. primitive/simple //
/*
* include: numbers, strings, boolean, NaN, undefined,  and null
* 
* atomic/immutable: do not hold any other values and do not alter
* the original value. they cannot be changed 
*
* copy by value, meaning when they are assigned or passed, they
* are copied from one variable to the next 
*
* var x = 'abc' // ===> using = x is copied to the new variable 'abc'
*/


// 2. complex //
/*
* include: objects, arrays, and functions
*
* mutable: they can be changed and are of an indefinite size
*
* copy by reference, meaning when they are assigned or passed, 
* they are being passed by reference 
*
* 
* var myName = {
*  firstName: "Jack"
* };
* var identity = myName;
* myName.firstName = "John";
*
* console.log(myName.firstName); // "John"
* console.log(identity.firstName); // "John"
*/