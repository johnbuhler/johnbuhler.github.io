/*
* OPERATORS:
* 0. Key words or symbols that tell the engine what action to perform  
*/



/// ASSIGNMENT OPERATORS ///

/*
* Use to assign certain values to certain variables 
*/


// 1. assign //
/* 
* (x = y) ===> (x = y)
*
* var x = 5;
* alert(x); // output is 5  
*/ 


// 2. add and assign //
/*
* uses the += operator
*
* (x += $) ===> (x = x + y )
*
* var x = 10;
* x += 20;
* alert(x); // output is 30
*/


// 3. subtract and assign //
/*
* uses the -= operator
*
* (x -= y) ===> (x = x - y)
*
* var x = 30;
* x -= 20;
* alert(x); // output is 10
*/


// 4. multiply and assign //
/*
* uses the *= operator 
*
* (x *= y) ===> (x = x * y)
*
* var x = 5;
* x *= 10
* alert(x); // output is 50
*/


// 5. divide and assign quotient //
/*
* uses the /= operator 
*
* (x /= y) ===> (x = x / y)
*
* var x = 20;
* x /= 5;
* alert(x); // output is 4
*/


// 6. divide and assign modulus //
/*
* uses the %= operator
*
* (x %= y) ===> (x = x % y)
*
* var x = 50;
* x %= 15;
* alert(x); // output is 5
*/



/// ARITHMETIC OPERATORS ///

/*
* Use to perform common arthimetic and mathmatical operations, such as
* addition, subtraction, multiplication, division, and modulo
*/


// 1. addition //
/*
* uses the + operator 
* results in the sum of x and y
*/
console.log(1 + 1); // prints => 2


// 2. subtraction //
/*
* uses the - operator 
* results in the difference of x and y
*/
console.log(1 - 1); // prints => 0


// 3. multiplication //
/*
* uses the * operator
* results in the product of x and y
*/
console.log(2 * 2); // prints => 4


// 4. division //
/*
* uses the / operator
* results in the quotient of x and y
*/ 
console.log(4 / 2); // prints => 2


// 5. modulo //
/*
* uses the % operator
* results in the remainder of x divided by y
*/
console.log(4 % 3); // prints => 1



/// COMPARISON OPERATORS ///

/*
* used to compare 2 values in a boolean fashion
* can be a binary comparison or a strict comparison
*/

// <binary comparison> //
/*
* compares two values and evaluates to a boolean, true or false
*/

// 1. less than //
/*
* uses the < operator
*
* (x < y) ===> returns true if x is less than y
*/


// 2. greater than //
/*
* uses the > operator
*
* (x > y) ===> returns true if x is greater than y
*/


// 3. less than or equal to //
/*
* uses the <= operator 
*
* (x <= y) ===> returns true if x is less than y or equal to y
*/


// 4. greater than or equal to //
/*
* uses the >= operator
*
* (x >= y) ===> returns true if x is greater than y or equal to y 
*/ 



// <strict comparison> //
/*
* compares 2 values for 
*/

// 1. equal //
/*
* uses the == operator 
*
* (x == y) ===> returns true if x is equal to y
*/


// 2. identical //
/*
* uses the === operator
*
* (x === y) ===> returns true if x is equal to y, and are of the same type
*/


// 3. not equal //
/*
* uses the != operator 
*
* (x != y) ===> return true if x is not equal to y
*/


// 4. not identical //
/*
* uses the !== operator
*
* (x !== y) ===> returns true if x is not equal to y, or they are not of the same type
*/






/// LOGICAL OPERATORS /// 

/*
* Typically consists of symbols or words that are used to connect 2 or more 
* expression or 2 or more conditional statements 
*
* 3 main logical operators are 'and', 'or', and 'not'
*/

// 1. and //
/*
* uses the && operator
*
* (x && y) ===> returns true if both x and y are true
*/


// 2. or //
/*
* uses the || operator
*
* (x || y) ===> returns true if either x or y is true
*/


// 3. not //
/*
* uses the ! operator
*
* also considered an Unary Operator (see UNARY OPERATORS)
*
* (!x) ===> returns true if x is not true
*/






/// UNARY OPERATORS ///

/*
* A type of operation that consists of only 1 value (operand)
*/

// 1. typeof //
/*
* can be written out as ===> typeof operand || typeof (operand)
*
* returns a string that indicates the type of operand 
*
* the operand is the string, object, or variable for the type to return
*
* var myFunct = newFunct('5 + 5')
* typeof myFunct ===> returns 'function'
*/




/// TERNARY OPERATOR ///

/*
* Also known as a conditional operator, has 3 operands that are used to
* evaluate if the condition is truthy or falsy
*
* Often used as a short cut for an 'if' statement
*
* syntax: 
* 
* [condition] ? [ifTrue] : [ifFalse];
*
* condition: an expression whose value is used as a condition
*
* ifTrue: expression that is evaluated if the condition evaluates to 
* a truthy value
*
* ifFalse: expression that is executed if the condition is falsy 
*
*
* var age = 22;
* var beverage = (age >= 21) ? "Beer" : "Juice";
* console.log(beverage); // ===> returns "Beer"
*/