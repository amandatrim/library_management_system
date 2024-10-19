# Library Management System

This project is a **Library Management System** built using JavaScript. The system allows you to manage books, sections, and patrons, including both regular patrons and VIP patrons with special borrowing privileges. The project uses Object-Oriented Programming (OOP) principles such as inheritance, encapsulation, and method overriding.

## Project Structure

The system consists of four main classes:
- `Book`: Manages individual book details such as title, author, ISBN, and availability status.
- `Section`: Organizes books into different sections (e.g., Fiction, Science) and tracks the total number of available books.
- `Patron`: Allows patrons to borrow and return books.
- `VIPPatron`: Inherits from `Patron` and provides borrowing priority for VIP patrons.

## Features

- **Book Management**: Store and update information for each book, including title, author, and availability.
- **Section Management**: Add books to sections and calculate the total number of available books in each section.
- **Patron Management**: Manage regular patrons and VIP patrons, allowing them to borrow and return books.
- **Borrowing Priority**: VIP patrons are given priority over regular patrons when borrowing books.

## Tasks Breakdown

1. **Book Class**  
   - Represents the details of a book, including title, author, ISBN, and availability.
   - Provides methods to get book details and manage availability.

2. **Section Class**  
   - Represents a section of the library.
   - Stores an array of books and provides methods to list and manage them.

3. **Patron Class**  
   - Represents a library patron who can borrow and return books.
   - Stores an array of borrowed books.

4. **VIPPatron Class**  
   - Inherits from `Patron` and adds priority to VIP patrons.
   - Overrides the `borrowBook()` method to prioritize VIP patrons.

