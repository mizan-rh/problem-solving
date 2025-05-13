// Array of car objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Focus", year: 2022 },
  { make: "BMW", model: "X5", year: 2019 }
];

// Function to sort by year in ascending order
function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

// Call the function and print the sorted array
const sortedCars = sortCarsByYear(cars);
console.log("Sorted cars by year (ascending):");
console.log(sortedCars);
