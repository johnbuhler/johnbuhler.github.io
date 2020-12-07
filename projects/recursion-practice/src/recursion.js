// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n === 1 || n === 0){
    return 1;
  } else if (n < 0) {
    return null;
  }
  
  //recursive case//
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //check if the length of the array is equal to zero//
  if (array.length === 0) {
    //base case//
    //if yes, return 0//
    return 0; 
  }
  //recursive case//
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //dont do//
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0){
    //base case//
    return isEven(-n);
  } else if (n >= 2) {
    
    return isEven(n - 2);
  }
  //recursive case//
  return n === 0;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case
  if (n === 0) {
  return 0;   
  } else if (n < 0){
    return n + 1 + sumBelow(n + 1);
  } 
  //recursive case//
  return n-1 + sumBelow(n - 1);
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //if the intergers are the same, return an empty array//
  //create an empty array to store the values//
  let r = [];
  //create a variable step to help determine wether to range up or down//
  const step = x > y ? -1 : 1; //return -1 if x > y //return 1 if x < y
  //base Case : stop when x === y//
  if (x === y){
    return r;
  }
  //if there is no interger between x and y, return the empty array//
  if ( x === y - step){
    return r;
  }
  //recursive case//
  //add step to x to account for all ranges//
  return r.concat(x + step, range(x + step, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base case//
  //make a statement that checks if the exponent is equal to zero//
  if (exp === 0) {
    return 1;
    //make a statement that checks if the exponent is greater than zero//
  } else if (exp < 0) {
    //take the exponent and multiply the base//
    //add to the exp?//
    //divide the base//
    return exponent(base, exp +1) / base;
  }
  //recursive case//
  //mult base by exp and subtract 1 from the exp//
  return base * exponent(base, exp -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  return n == 1 ? true : (n < 1 ? false : powerOfTwo(n/2));
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base case//
  if(string.length === 0) {
    return "";
  }
  //recursive case//
  return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base Case: stop when the value of string is <= 1//
  // 'noon' = '', 'eve' = 'v' both should return true//
  string = string.toLowerCase();
  string = string.replace(/ /g, '');
  if (string.length <= 1){
    return true;
  }
  //create an array to hold the strings firstletter//
  let [first] = string;
  //create a second array to hold the string's last letter//
  let last = string[string.length -1];
  if(first === last){
    //recursive case//
    return palindrome(string.slice(1, string.length -1));
  } else { return false}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  //dont do//
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
 if (y === 0){
   return 0;
 }
 if (y > 0){
   return x +multiply(x, y-1);
 }
 if (y < 0)
 return -multiply(x, -y);
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  //dont do//
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  //dont do//
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //test if strings are equal to 0//
  //return true//
  //base case//
  if(str1.length === 0 && str2.length === 0) {
    return true;
    //test if string chars are equal//
  } else if (str1[0] === str2[0]) {
    //slice string at index of 1 if chars are the same//
    //recur case//
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    var arr = [];
    if(str.length === 0) {
        return arr;
    }
    arr.push(str[0]);
    
    arr = arr.concat(createArray(str.slice(1)));
    
    return arr;
  
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var output = [];
  if (output.length===array.length) {
    return output;
  } else {
     return output.concat(reverseArr(array.slice(1)),array[0]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  
  let array = [];
  if(length === 0) {
  	return array;
  }
  array.push(value);
  return array.concat(buildList(value, length -1));  
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  
    if(array.length === 0) { 
    	return 0;
   }
    return (array[0] === value) + countOccurrence(array.slice(1), value);  
  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  if(array.length === 1) { 
  	return callback(array); 
  }
    return [callback(array[0])].concat(rMap(array.slice(1), callback));

  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  //dont do//
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  //dont do//
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  //dont do//
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  //dont do//
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  
  //edge cases//
  //if the number passed into it is less than 0, return null//
  if(n < 0){
    return null;
  }
  //if the number passed into it is 0, return 0//
  //base case
  else if(n === 0){
    return 0;
  }
  //if the number passed into it is 1, return 1//
  //base case 2//
  else if (n === 1){
    return 1;
  }
  
  //recursive case//
  
  return nthFibo(n - 1)   +  nthFibo(n - 2); 
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    let result = [];
    if(input.length === 0) {
        return result;
    }
    result.push(input[0].toUpperCase());
    result = result.concat(capitalizeWords(input.slice(1)));
    return result;  

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  
    let result = [];
    if(!array.length) { return result; }
    result.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
    result = result.concat(capitalizeFirst(array.slice(1)));
    return result;  
  
  
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  //dont do//
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  //dont do//
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  
     let result = Array.from(arguments)[1] || {};
    if(str.length === 0) {
        return result;
    }
    if(!result[str[0]]) {
        result[str[0]] = 1;
    } else
     {
        console.log(result[str[0]], 'hey');
        result[str[0]]++;
    }
    return letterTally(str.slice(1), result);
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, result = []) {
        if (list.length === 0) {
            return result;
        } 
        if (list.length === 1) {
            result.push(list[0]);
            return result;
        }
        if (list[0] !== list[1]) {
            result.push(list[0]);
        }
        return compress(list.slice(1), result);
    };

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  //dont do//
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  
     if (array.length === 0) { 
       //base case
       return array; 
     }
     if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
        //recursive case
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } 
  
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
    if (array.length === 0) { 
      //base case
      return array; 
    }
    if(array[0] < 0) { 
      array[0] = -array[0]; 
    }
    if(array[1] > 0) { 
      array[1] = -array[1]; 
    }
    //recursive case
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
if (str.length === 1 && str === '') {
	  return str.slice;
	}
	
	if (!str) {
		return '';
	}
  //create a var representing the number 0 through 10 in words
	var numberNames = 'zero one two three four five six seven eight nine ten'.split(' ');
	var numTranslator = {};
	for (var i = 0 ; i < numberNames.length ; i++) {
			numTranslator[i] = [numberNames[i]];
	}

	var character = str[0];
	character = numTranslator[character] ? numTranslator[character] + '' : character;
  
  //recursive case
	return character + numToText(str.slice(1));  
  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
