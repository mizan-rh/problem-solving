// Array with duplicate values
const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];

// Function to get unique values
function getUniqueValues(arr) {
  return [...new Set(arr)];
}

// Call the function and print the result
const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers);
