// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    //input: any value//
    //output: is that value unchanged//
    //constraints: N/A//
    //edge case: N/A//
    return value;
};



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value){
    if (typeof value === 'string') {
       return 'string';
   } else if (Array.isArray(value)) {
       return 'array';
   } else if (value === null) {
       return 'null';
   } else if (typeof value === 'number') {
       return 'number';
   } else if (typeof value === 'object') {
       return 'object';
   } else if (typeof value === 'function') {
       return 'function';
   } else if (typeof value === 'boolean') {
       return 'boolean';
   } else if (typeof value === 'undefined') {
       return 'undefined';
   }  
};




/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//input: an array and a number//
//output: an array if <array> is not an array//
//output: the first element in the array if <number> is not given or not a number//
//output: first <number> items of <array>
//edge case: if <number> is negative//
//edge case: if <number> is greater than the length of the array//
_.first = function(array, number) {
    //check to see if the array is not an array//
    if (!Array.isArray(array) || number < 0) {
        //returns an empty array//
        return [];
    } 
    //check to see if <number> is not a number, undefined, or is a number//
    //account for negative number//
    if (isNaN(number) || number === undefined || number === 1) {
        //returns the first element in the array//
        return array[0];
    } else {
        //returns the first number item of the array//
        return array.slice(0, number);
    }    
        

};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//input: an array and a number//
//output: an array if <array> is not an array//
//output: the last element in the array if <number> is not given or not a number//
//output: last <number> items of <array>
//edge case: if <number> is negative//
//edge case: if <number> is greater than the length of the array//
_.last = function(array, number) {
    //checks to see if the array is not an array//
    if (!Array.isArray(array) || number < 0) {
        //returns an empty array//
        return [];
    }
    //checks to see if <number> is not a number, undefined, or is a number//
    //acount for negative number//
    if (isNaN(number) || number === undefined || number < 1) {
        return array[2];
    }
    //check to see if the number is greater than the array length//
    if (number > array.length){
        //returns array//
        return array;
    }
    else {
        //returns the last <numer> items of the array//
        return array.slice(array.length - number);
    }
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//input: an array and a value//
//output: index of the array that is the first occurrance of the value//
//output: -1 if value is not in the array//
//edge case: if array has multiple iccurances of value//
//edge case: if value is not in the array//
_.indexOf = function (array, value) {
    //loop through the array//
    for(let i = 0; i < array.length; i++) {
        //check to see if the array contains the value//
        if(array[i] === value) { 
            //if true, create a var that adds i and return it//
                let returnValue = i++;
            return returnValue;
        } 
    }
    //return -1 if it is not in the array//
    return -1;
};



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//input: an array and a value//
//output: return true if the array contains the value//
//output: return false otherwise//
//output: use a ternary operator//
_.contains = function(array, value) {
        return (array.includes(value)  ? true : false);
};



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//input: a collection and a function//
//output: if collection is an array, call <func> once for each element with arguments of element, index, and collection//
//output: if collection is an object, call <func> once for each property with arguments of the propertys value, its key, and collection//
_.each = function(collection, func) {
    //checks if collection is an array//
    if (Array.isArray(collection)) {
        //loop through the collection//
        for (let i = 0; i < collection.length; i++) {
            //call <func> with the specified arguments//
            func(collection[i], i, collection);
        }
      //checks to see if collection is an object//    
    } else if (!Array.isArray(collection) && typeof collection === 'object') {
        //loop through the collection//
        for (let key in collection) {
            //call <func> with the specified arguments//
            func(collection[key], key, collection);
        }
    }
};



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//input: an array//
//output: an array of elements with duplicates removed//
_.unique = function(array) {
    //filter the array of duplicates//
   return array.filter((a, b) => array.indexOf(a) === b);
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//input: an array and a function//
//output: call <func> for each element in the array with the arguments element, index, and <array>//
//output: a new array of elements that returned true when the function was called//
_.filter = function(array, func){
    //create filter array//
    //loop through given <array>//
    let newArr = [];
    _.each(array, function(ele, i, array) {
    //if func called over each ele in array with the arguments ele, i in array returns true//
    if(func(ele, i, array)){
        //then push those eles into newArr//
        newArr.push(ele);
    }
    });
    //return newArr//
    return newArr;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    // create filter array
    // loop through given <array>
    let newArr = [];
    _.each(array, function(ele, i, array) {
        // if func called over each ele in array with the arguments ele, i in array returns true
        if(!func(ele, i, array)){
            //push elements into the new array//
            newArr.push(ele);
        }
    });
    //return newArr//
    return newArr;
};



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//input: an array and a function//
//output: return an array that is made up of two sub arrays in which the function returned truthy or falsy//
_.partition = function(array, func){
    return [_.filter(array, func), _.reject(array, func)];
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//input: a collection and a function//
//output: return a new array of the return values of each function call//
 _.map = function(collection,func){
    //create an empty array//
    let newArray = [];
        //loop through collection//
        for(let i = 0; i < collection.length; i++){
            //statement that checks to see if the function passes the argument//
            if(func(collection[i],[i],collection) === true){
                //if true, push the collection into the new array//
                newArray.push(collection[i]);
            }
          //loop through the object//  
        } for (let key in collection ) {
            //push the function and its collection as an object into the new array//
            newArray.push(func(collection[key], [key], collection));
      //return the new array//      
    } return newArray;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//input: an array of objects and a property//
//output: an array containing the values of property for every element in the array//
_.pluck = function(arrayObj, property){
  return _.map(arrayObj, function(obj) {
        return obj[property];
    });
};



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//input: a collection and a function//
//output: return true if the value of calling function is true for every element//
//output: return false if at least one element is false//
//edge case: if function doesnt return a boolean//
//edge case: if function is not given//
_.every = function(collection, func) {
    //delcared a variable check and assigned it to func or _.identity//
    let check = func || _.identity;
    //loop through the collection//
    for (let i = 0; i < collection.length; i++) {
        //statement that sees if the value is not a function or has not changed//
        if (! check(collection[i])) {
            return false;
        }
    }
    return true;
};



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//input: a collection and a function//
//output: return true if the value of calling function is true for at least one element//
//output: return false if all elements are false//
//edge case: if function doesnt return a boolean//
//edge case: if function is not given//
_.some = function(collection, func){
    //declared a variable result and assigned it to the boolean false//
    let result = false;
    _.each(collection, function(e, i, collection){
        //checks to see if func is not a function//
        if (typeof func !== 'function'){
            if (e){
            result = true;    
            }
        }
        else if (func(e, i, collection)){
            result = true;
        }
    });
    return result;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(arr, action, seed) {
    //this function can have two routes//
    //either their is a seed provided//
    if(seed !== undefined) {
        //if seed value passed, create a new variable called result and initialize it to the seed//
        let result = seed;
        //loop through the array starting at index 0 with the each function//
        _.each(arr, function(element, index, array){
            //assign the result of passing each element to the function to the result variable//
            result = action(result, element, index);
            //the each/forEach does not return anything, so we cant say return here//
        });
        //return result outside of each//
        return result;
    } else {
        //if no seed is given the first element will be the result//
        let result = arr[0];
        //loop through the array starting at index 1 using the each function//
        _.each(arr, function(element, index, array) {
            //only reassign result if the index is not 0//
            if (index !== 0) {
                //assign the result of passing each element to the function to the result variable//
                result = action(result, element, index, array);
            }
        });
        return result;
    }
    
}; 



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//input: object(s)//
//output: updated object//
_.extend = function(...obj) {
    let newObject = {};
    return Object.assign(...obj);
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
