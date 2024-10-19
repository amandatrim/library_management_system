// Task 1: Create a Book class
// The Book class represents a book in the library with properties for title, author, ISBN, and availability.
class Book {
    constructor(title, author, ISBN, isAvailable = true) {
        this.title = title; // The title of the book
        this.author = author; // The author of the book
        this.ISBN = ISBN; // The ISBN number of the book
        this.isAvailable = isAvailable; // Availability status (true = available, false = borrowed)
    }

    // Method to return book details
    getDetails() {
        return `${this.title} by ${this.author}, ISBN: ${this.ISBN}`;
    }

    // Getter to check if the book is available
    get isAvailableStatus() {
        return this.isAvailable;
    }

    // Setter to update the book's availability
    set isAvailableStatus(status) {
        this.isAvailable = status;
    }
}

// Task 2: Create a Section class
// The Section class represents a section in the library that contains multiple books.
class Section {
    constructor(name) {
        this.name = name; // The name of the section (e.g., Fiction, Science)
        this.books = []; // Array to store Book objects in this section
    }

    // Method to add a book to the section
    addBook(book) {
        this.books.push(book);
    }

    // Method to return the total number of available books in the section
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailableStatus).length;
    }

    // Method to list all books in the section
    listBooks() {
        return this.books.map(book => ({
            title: book.title,
            author: book.author,
            isAvailable: book.isAvailableStatus
        }));
    }
}


// Task 3: Create a Patron class
// The Patron class represents a library user who can borrow and return books.
class Patron {
    constructor(name) {
        this.name = name; // The name of the patron
        this.borrowedBooks = []; // Array to store borrowed books
    }

    // Method to borrow a book
    borrowBook(book) {
        if (book.isAvailableStatus) {
            this.borrowedBooks.push(book);
            book.isAvailableStatus = false;
        } else {
            console.log(`${book.title} is currently unavailable.`);
        }
    }

    // Method to return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailableStatus = true;
        }
    }
}


