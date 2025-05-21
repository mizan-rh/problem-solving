// Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


// Create an array of person objects
const people = [
  { name: "John", age: 28, gender: "male" },
  { name: "Sarah", age: 32, gender: "female" },
  { name: "Michael", age: 45, gender: "male" },
  { name: "Emily", age: 24, gender: "female" },
  { name: "David", age: 37, gender: "male" },
  { name: "Jessica", age: 29, gender: "female" },
  { name: "Robert", age: 41, gender: "male" },
  { name: "Amanda", age: 35, gender: "female" }
];

// Function to filter out females and map to names
function getMaleNames(peopleArray) {
  // Filter out females (keep only males)
  const malesOnly = peopleArray.filter(person => person.gender === "male");
  
  // Map the remaining people to just their names
  const maleNames = malesOnly.map(person => person.name);
  
  return maleNames;
}

// Get and print the final result
const result = getMaleNames(people);
console.log(result);