// Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// Step 1: Create an array of students
const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [70, 75, 72] },
  { name: "Charlie", grades: [95, 92, 90] },
  { name: "David", grades: [85, 80, 83] }
];

// Step 2: Function to calculate average
function getAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

// Step 3: Sort students by average grade (descending)
function sortByAverageGrade(students) {
  return students.sort((a, b) => getAverage(b.grades) - getAverage(a.grades));
}

// Step 4: Run the function and log result
const sortedStudents = sortByAverageGrade(students);
console.log(sortedStudents);
