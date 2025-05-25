// Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year. Happy New Year!`);
} else {
  console.log(`${year} is not a leap year.`);
}
