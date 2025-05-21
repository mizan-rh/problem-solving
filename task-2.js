// Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


// Create an array of book objects
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

// Function to extract just the book titles
function getBookTitles(booksArray) {
  // Map the books array to just the title property
  return booksArray.map(book => book.title);
}

// Get and print the book titles
const bookTitles = getBookTitles(books);
console.log(bookTitles);