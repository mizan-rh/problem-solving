// square a number
function square(x) {
  return x * x;
}

// double a number
function double(x) {
  return x * 2;
}

// add 5 to a number
function addFive(x) {
  return x + 5;
}

// Composed function: square -> double -> add 5
function processNumber(x) {
  return addFive(double(square(x)));
}

// Example
console.log(processNumber(3));
