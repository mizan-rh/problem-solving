function findMaxValue(numbers) {
  if (numbers.length === 0) {
    return null; // or throw an error
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const nums = [5, 8, 2, 9, 3];
console.log(findMaxValue(nums)); // Output: 9
