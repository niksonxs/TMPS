# Solid Principles Sample Project

This is a sample project that demonstrates the use of SOLID principles in an object-oriented JavaScript application.
Domain Area

The domain area for this project is a simple online bookstore.
Classes

There are four main classes in this project:

    Book: Represents a book in the bookstore. It has properties such as title, author, ISBN, price, and genre.
    Cart: Represents a shopping cart in the bookstore. It stores a list of items and their quantities.
    CartService: Provides operations for managing a shopping cart, such as adding items, updating quantities, and removing items.
    OrderService: Provides operations for placing an order based on the items in a shopping cart.

SOLID Principles

This project respects all five SOLID principles:

    Single Responsibility Principle (SRP): Each class has a single responsibility and does not have knowledge of the implementation details of other classes.
    Open/Closed Principle (OCP): The classes are open for extension but closed for modification. New functionality can be added through inheritance or composition.
    Liskov Substitution Principle (LSP): The classes follow the LSP by allowing subclasses to be substituted for their base class.
    Interface Segregation Principle (ISP): The classes follow the ISP by having interfaces that are specific to their needs and not bloated with unnecessary methods.
    Dependency Inversion Principle (DIP): The classes follow the DIP by depending on abstractions rather than concrete implementations, allowing for flexibility and easy swapping of dependencies.

Usage

`node main`

Conclusion

This sample project demonstrates how SOLID principles can be applied to create a flexible, extensible, and maintainable object-oriented JavaScript application.
