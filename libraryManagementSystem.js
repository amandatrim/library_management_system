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

// Task 4: Create a VIPPatron class that inherits from Patron
// The VIPPatron class inherits from the Patron class, with the ability to prioritize borrowing.
class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name); // Inherit properties and methods from Patron class
        this.priority = priority; // VIP patrons have borrowing priority
    }

    // Override the borrowBook method to prioritize borrowing for VIP patrons
    borrowBook(book) {
        console.log(`VIP ${this.name} is borrowing the book.`);
        super.borrowBook(book); // Call the original borrowBook method from Patron
    }
}


// Task 5: Handle Books Borrowing and Returning
// Adding a method to the Section class to calculate total available books in the section.
Section.prototype.calculateTotalBooksAvailable = function() {
    return this.books.reduce((total, book) => total + (book.isAvailableStatus ? 1 : 0), 0);
};


// Task 6: Create and manage library sections and patrons
// Creating a new library structure with two sections, multiple books, and patrons.
const fictionSection = new Section("Fiction");
const scienceSection = new Section("Science");

// Adding books to the Fiction section
fictionSection.addBook(new Book("1984", "George Orwell", "123456789"));
fictionSection.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "987654321"));

// Adding books to the Science section
scienceSection.addBook(new Book("A Brief History of Time", "Stephen Hawking", "1122334455"));
scienceSection.addBook(new Book("The Selfish Gene", "Richard Dawkins", "5544332211"));

// Creating patrons
const regularPatron = new Patron("Alice");
const vipPatron = new VIPPatron("Bob");

// Regular patron borrowing a book
regularPatron.borrowBook(fictionSection.books[0]); // Borrowing "1984"

// VIP patron borrowing a book
vipPatron.borrowBook(scienceSection.books[0]); // Borrowing "A Brief History of Time"

// Displaying available books after borrowing
console.log(`Available books in Fiction section: ${fictionSection.calculateTotalBooksAvailable()}`);
console.log(`Available books in Science section: ${scienceSection.calculateTotalBooksAvailable()}`);


