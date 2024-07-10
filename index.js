// Import the crypto module
const crypto = require('crypto');

// Retrieve command line arguments
const args = process.argv;
const operation = args[2];
const numbers = args .slice(3).map(Number); 

// Function to perform the calculations [add , sub , mult , divide , sin , cos , tan , random]
function calculate(operation, numbers) {
  switch (operation) {
    case 'add':
      if (numbers.length < 2) {
        console.log('Please provide at least two numbers for addition.');
        return;
      }
      console.log(numbers.reduce((a, b) => a + b, 0));
      break;

    case 'sub':
      if (numbers.length < 2) {
        console.log('Please provide at least two numbers for subtraction.');
        return;
      }
      console.log(numbers.reduce((a, b) => a - b));
      break;

    case 'mult':
      if (numbers.length < 2) {
        console.log('Please provide at least two numbers for multiplication.');
        return;
      }
      console.log(numbers.reduce((a, b) => a * b, 1));
      break;

    case 'divide':
      if (numbers.length < 2) {
        console.log('Please provide at least two numbers for division.');
        return;
      }
      console.log(numbers.reduce((a, b) => a / b));
      break;

    case 'sin':
      if (numbers.length !== 1) {
        console.log('Please provide one number for sine calculation.');
        return;
      }
      console.log(Math.sin(numbers[0]));
      break;

    case 'cos':
      if (numbers.length !== 1) {
        console.log('Please provide one number for cosine calculation.');
        return;
      }
      console.log(Math.cos(numbers[0]));
      break;

    case 'tan':
      if (numbers.length !== 1) {
        console.log('Please provide one number for tangent calculation.');
        return;
      }
      else if (numbers.length !== 1) {
        console.log('Please provide one number for tangent calculation.');
        return;
      }
      
      console.log(Math.tan(numbers[0]));
      break;

    case 'random':
      if (numbers.length !== 1) {
        console.log('Provide length for random number generation.');
        return;
      }
      const length = numbers[0];
      const randomBytes = crypto.randomBytes(length);
      console.log(randomBytes.toString('hex'));
      break;

    default:
      console.log('Invalid operation');
  }
}

// Executing the calculation
calculate(operation, numbers);
