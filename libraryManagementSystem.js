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


