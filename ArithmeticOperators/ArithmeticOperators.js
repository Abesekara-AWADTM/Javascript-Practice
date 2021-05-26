// ------Arithmetic Operators------
// --------------------------------


// --Single Operators--
 var myAge,yourAge,year,result;
 myAge=25;
 yourAge=20;
 year=2020;

 // Substraction
 result=year -myAge;
 console.log("I was born in "+result);

 // Addition
 result=year + 10;
console.log("After 10 years "+ result);

// Multiplication
result = myAge * yourAge;
console.log('Product of our ages '+result);

// Division
console.log('Division of our ages '+(myAge/yourAge));

// Modulus
console.log('Modulus of our ages '+(myAge%yourAge));

// Exponentiation
console.log('Exponent of my age '+(myAge**2));
console.log('Exponent of your age ' +(yourAge**3));

//increment
console.log('post Increment '+ myAge++);
console.log('post Increment '+ myAge);
console.log('pre Increment '+ ++myAge);
console.log('pre Increment '+ myAge);

// Decrement
console.log(myAge--);
console.log('Post Decrement of my age '+myAge);
console.log(--myAge);
console.log('Pre Decrement of my age '+myAge);