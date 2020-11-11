/*
* LOOPS:
*
* 0. Built-in features that allow us to run or execute a block of code as 
* many times as needed.
*
* 1. Useful for iterating over colelctions of data which allow us to pull
* out the values to work on them individually
*
*/





/// WHILE, FOR, FOR-IN ///


// 1. while //

/*
* makes a loop that executes a block of code as long as the condition is true
*
* evaluates the expression before each iteration of the loop
*
*
* var count = 1
* while (count < 10) {
*   console.log(count);
*   count++;
* }
*   // prints to console the numbers 1 - 9
*/



// 2. for //

/*
* basic loop that loops through a block of code a specified number of times
*
* the syntax of a for loop is as such:
*
* for ([initialization], [condition], [final expression]) {
*    [statement]
* }
*
* initialization: a variable declaration evaluated before the loop begins,
* and is used to initialize a counter variable
*
* condition: an expression that is evaluated before each loop iteration,
* and if it evaluates to true, the statement is executed
*
* final expression: expression to be evaluated at the end of each loop iteration
* that occurs before the next evaluation of the condition and updates or
* increments the counter variable
*
* statement: statement that is executed as long as the condition evaluates to true
*
*
* for (var i = 0; i <= 5; i++) {
*   console.log(i);   
* }
*   // prints to console the numbers ===> 0 - 5
*/



// 3. for-in //

/*
* pulls out all the keys of an object which allows you to use the key 
* to get the values inside the object 
*
* syntax:
* for ([variable] [key] in [object])
*   statement
*
* variable: on each iteration, a different property name is assigned
* 
* key: the property (key) that is being looked for within the specified
* object
*
* object: the object whose properties are iterated over
*
*  
* var person = {firstName: 'Frank', lastName: 'Reynolds'}
* for (var key in person) {
*   console.log(person[key]);   
* }
*   // prints to console ===> Frank Reynolds
*/







/// LOOP ANY NUMBER OF TIMES, FOWARD COUNTING UP TO A LIMIT, BACKWARDS COUNTING DOWN TO 0 ///

// 1. foward //

/*
* for (var i = 0; i <= 10; i++) {
*   console.log(i);  
* }
*   // prints to console the numbers ===> 0 - 10
*/


// 2. backwards //

/*
* for (var i = 10; i >= 0; i--) {
*   console.log(i);
* }
*   // prints to console the numbers ===> 10 - 0 in reverse 
*/





/// LOOP OVER AN ARRAY, FOWARD AND BACKWARDS ///

/*
* the for loop is used for looping over arrays, both fowards and 
* backwards
*/


// fowards //
/*
* let myArray = ["a", "b", "c", "d"];
* for(let i = 0; i < myArray.length; i++){ 
* console.log(myArray[i]);
* }
*   // prints to console ===> a b c d
*/


// backwards //
/*
* let myArray =  ["a", "b", "c", "d"];
*
* for (var i = myArray.length - 1; i >= 0; i--) {
*	console.log(myArray[i]);
* }
* // prints to console ===> d c b a
*/ 





/// LOOP OVER AN OBJECT ///

/*
* the for-in loop can be used to loop over an object
*
* can also use Object.keys and Object.values
*/
 