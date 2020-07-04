// ### 1. printGreeting

// Write a function called `printGreeting` with a parameter `name` that returns a greeting
// with the argument **interpolated** into the greeting.

// ```javascript
// console.log(printGreeting("Slimer"));
// ```

// > `=> Hello there, Slimer!

const printGreeting = (name) => {
    console.log("Hello there," + name)
}
printGreeting("slimer");


// ### 2. reverseWordOrder

// Write a function `reverseWordOrder` that accepts a single argument, a string. 
//The function should return a string with the order of the words reversed. 
//Don't worry about punctuation.

// ```javascript
// console.log(reverseWordOrder("Ishmael me Call"));
// ```

// > `=> "Call me Ishmael"`

const reverseWordOrder = (string) => {
    console.log(string)
}
reverseWordOrder("ismael me call")




// ### 3. calculate

// Write a function called `calculate`.

// This function should take three arguments: two numbers and a string.

// Name the parameters `num1`, `num2`, and `operation`.

// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.

// If if the function is called with the third argument as "sub", it should return return `num1` minus `num2`.

// Do the same thing for multiplication "mult", division "div", and exponent "exp" 
//(where `num2` is the exponent of `num1`).

// ```javascript
// console.log(calculate(4, 3, "sub"));

// => 1
// ```

// ```javascript
// console.log(calculate(4, 3, "exp"));

// => 64
// ```

const calculate = (num1, num2, operation) => {
    console.log(num1 - num2)
}
calculate(4,3 );

const calculate = (num1, num2, operation) => {
    console.log(Math.pow(num1, num2));
}
calculate(4,3 );


// ### 4. pandigital numbers

// > Note: The following question is weird, we know. In interviews, you will absolutely be given 
//coding challenges with "weird" questions and you'll need to be very careful when reading these 
//types of questions to make sure you understand what you're being asked to do.

// A number of length n is _1-to-n pandigital_ if it makes use of all the digits 1 to n exactly once.

// - The number `15234` is _1-to-n pandigital_ because it is 5 numbers long and includes 1, 2, 3, 4, and 5.

// - The number `333` is **not** _1-to-n pandigital_.

// - The number `0` is **not** _1-to-n pandigital_.

// - The number `987654321` is _1-to-n pandigital_.

// Write a function that checks if a number is _1-to-n pandigital_.

const checkPandigital = (input) => {
	if (input  {
		console.log('Pandigital number');
	} else {
		console.log('Not Pandigital number');
	}
};
checkPandigital('15234')



// ### 5. `printGreeting` v2.0

// There is a very rudimentary JavaScript function for receiving user input called `prompt()`.  

// Usage: 
// ```js
// 	const userInput = prompt("Please enter some input");
// ```
// > `userInput` is now whatever the user entered.

// There is another rudimentary JavaScript function for displaying text called 
// `alert()`. You probably have heard of it. It takes a string as a parameter. Read about it on mdn.

// Let's revisit `printGreeting`.
// First get the `userInput` as above. Then write a function called `printGreeting2` with a parameter 
// `name` that 
// returns a greeting with the argument interpolated into the greeting as before, but this time use the alert 
// function to display the greeting to the user. 



const userInput = prompt("What is your name?");
const printGreeting2 = (name) => {
    console.log("Hello" + name)
  
}

printGreeting2(userInput)
