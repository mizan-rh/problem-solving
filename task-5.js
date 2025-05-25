// Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// Array of numbers
const numbers = [10, 15, 20, 25, 30, 35, 40];

// Function to calculate sum of even numbers using reduce
function sumOfEvenNumbers(arr) {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0); // Start from 0
}

// Call the function and print the result
const totalEvenSum = sumOfEvenNumbers(numbers);
console.log("Sum of even numbers:", totalEvenSum);
