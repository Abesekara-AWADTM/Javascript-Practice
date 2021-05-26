


// --Primitive Data Types--
/* Number - Floating point numbers, for decimals and integers
   String - Sequence of characters, used for text
   Boolean - Logical data type that can only be true or false
   Undefined - Data type of a variable that does not have a value yet
   Null - Non-existent */

   // You only can start a varible name with a letter, underscore or dollar sign.
// And can't use any reserved keywords as variable names



// Create variables
var firstName = 'Thilini'; //use camal case
var firstName = 'Madushani';
var age =23;
var isOk=true;
var job, height;

// Print only variable
console.log(firstName);

// Print the variable with a string
console.log("My name is "+firstName);

// Type Coercion
console.log("My age is "+ age);
console.log(" It is "+ isOk);
console.log(" My Job is "+ job);


// Get variable type
console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

// Define
job = 'Student';
// Variable Mutation
lastName = 'Abesekara';
console.log(lastName,job);

// Dsiplay an alert
alert('My name is '+firstName+'. I am '+age+' years old. And am I ok? '+isOk+'.');

// Get user input
height= prompt("what is your height ???");
// give alert as output of user input
alert("My height is "+height + " feets.");


