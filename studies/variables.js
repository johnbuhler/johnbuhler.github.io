/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
/*
*var myName;
*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*
* console.log(myName); // prints => undefined
*/


// 2. initialization or assignment //
/*
* myName = 'john';
* console.log(myName); // prints => john
*/


// 3. re-assignment //
/*
* myName = 'bob';
* console.log(myName); // prints => bob
*
* // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
* var myVariable = 1;
* var myVariable = true;
* myVariable = "someString";
*.


// VAR, LET, CONST //

/* variables can be assigned to 3 different declaration keywords: var, let, const
 * there are differences between the 3
 */
 
// 1. var //
/*
* var name = 'John';
* console.log(name); // prints => John
*/

/*
* The scope (where the variables are available to us) of var can be considered global when 
* the var variable is delcared outside a function.
*/


/*
* When var is declared within a function, it is considered function scoped, meaning it is 
* available and can be accessed only within the function
*/
/*
* var greet = 'whats up';
* function newGreet() {
*    var hi = 'hi';
* }
*/

//console.log(hi); // result in an error since hi is not available outside the function 

/*
* var variables can be re-declared and updated
*
* var greeter = 'hello';
* var greeter = 'hi there'; // here the var greeter is being re-declared from hello to hi there
*/


// 2. let //
/*
* considered an improvment of the var variable
* the scope of let is considered blocked if it is declared inside of a function {}, and is
* only available within that block (function)
*
* let greeting = 'say hello';
* let times = 3;
*
* if (times > 2) {
*    let hi = 'say hi instead'
*    console.log(hi); // will print "say hi instead"
* }
* // since hi is blocked within the function, it will print hi is not defined
*
* let can be updated but not re-declared 
*/



// 3. const //
/*
* the var const is also considered to be block scoped 
* const cannot be re-declared or updated, meaning it stays the same within the scope
* must be initialized when it is being declared 
*
*const greetHello = 'hello';
*greetHello = 'well hello'; // will return error: assignment to constant variable 
*/







// HOISTING //
/*
* Hoisting is the behavior of moving all declarations to the top of the current scope,
* script, or function.
*
* the variables let and const are hoisted to the top, but they are not initialized, meaning  
* it cannot be used until it has been declared 
*
* Its best practice to declare variables at the beginning of the scope 
*
*/
