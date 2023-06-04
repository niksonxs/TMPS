# Behavioral Design Patterns Project

This project that demonstrates the implementation of design patterns such as Observer, Command, and Iterator to achieve flexible and maintainable behavior in a shopping cart system, allowing customers to add and remove items, admins to manage products, and providing iteration capabilities.

    Command Pattern
    Iterator Pattern
    Observer Pattern

### Domain Area

The domain area for this sample project is an e-commerce website that allows customers to order products online.
Folder Structure

The project should have the following folder structure:

    src
    ├── behavioral
    │   ├── command
    │   │   └──addItemCommand.js
    │   ├── iterator
    │   │   └──shoppingCartIterator.js
    │   └── observer
    │       └──cartTotalDisplay.js
    ├── shoppingCart
    │   └── shoppingCart.js
    ├── products
    │   └── product.js
    main.js

### Patterns

#### Observer

This pattern allows various components of the shopping cart system to subscribe and receive updates whenever the cart items change.

#### Command

This pattern encapsulates requests as objects, allowing the shopping cart system to parameterize clients with different requests, queue or log requests, and undo operations.

#### Iterator

The Iterator pattern provides a way to sequentially access the elements of a collection without exposing its underlying structure.

### Running the Project

To run the project, you can execute the main.js file using Node.js:

`node main.js`

This will output the objects created using each pattern to the console.
Conclusion

This project demonstrates how to use creational design patterns to create objects in JavaScript. By using these patterns, we can create objects in a flexible and reusable way, which can make our code more maintainable and easier to extend in the future.
