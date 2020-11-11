/*
* CONTROL FLOW
*
* 0. Conditional Statements 
*/





// IF //

/*
* used to execute a statement if the logical condition is true
*
* can have multiple if statements that will test for a different
* condition
*
*
* var x = 'blue';
*
* if (x === 'blue') {
*   return true;        // will return true if the condition is true
* }                     
*/





// ELSE IF //

/*
* a compounded if statement that is used to test multiple conditions
* within a sequence
*
* if multiple conditions are being tested, only the first logical 
* condition that evaluates to true will be executed. 
*
* can have as many else if statements as needed 
*
*
* var x = 'blue';
*
* if (x === 'red') {
*   // code executed if condition1 is true   
* } else if (x === 'blue') {
*   // code executed if condition1 is false and condition2 is true   
* } else {
*   // code executed if both condition1 and condition2 if false
* }
*
*/





// ELSE //

/*
* optional else that executes if the if-clause condition was false
*
* 
* var x = 'blue';
*
* if (x === 'red') {
*   return true;   
* } else {
*   return false; // code will execute if the first condition is false   
* }
*/




// SWITCH //

/*
* the evaluation of an input expression that matches the expressions
* values to a case clause and executes statements associated with
* that clasue
*
* has a optional  'break' statement that should end the case at the end 
* of the block associated with that case
*
* 
* var color = 'blue';
*
* switch color = {
*   case 'orange':
*   case 'red':
*       console.log('warm colors');
*       break;
*   case 'yellow':
*       console.log('dumb color');
*       break
*   default:
*       console.log('not a color');
* }
*/