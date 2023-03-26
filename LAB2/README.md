# Creational Design Patterns for Object Instantiation

This is a sample project that demonstrates the use of creational design patterns for object instantiation in JavaScript. The project includes implementations of the following creational design patterns:

    Factory Pattern
    Builder Pattern
    Singleton Pattern
    Prototype Pattern

### Domain Area

The domain area for this sample project is an e-commerce website that allows customers to order products online.
Folder Structure

The project should have the following folder structure:

    ├── creational
    │   ├── builder.js
    │   ├── factory.js
    │   ├── prototype.js
    │   └── singleton.js
    ├── models
    │   ├── customer.js
    │   ├── order.js
    │   └── product.js
    └── main.js

### File Descriptions

    creational/factory.js: This file contains the implementation of the Factory pattern for creating products.

    creational/builder.js: This file contains the implementation of the Builder pattern for creating orders.

    creational/singleton.js: This file contains the implementation of the Singleton pattern for creating a customer object.

    creational/prototype.js: This file contains the implementation of the Prototype pattern for cloning product, order, and customer objects.

    models/product.js: This file defines the Product class.

    models/order.js: This file defines the Order class.

    models/customer.js: This file defines the Customer class.

    main.js: This file contains the main code that uses the creational design patterns and models.

### Running the Project

To run the project, you can execute the main.js file using Node.js:

`node main.js`

This will output the objects created using each pattern to the console.
Conclusion

This project demonstrates how to use creational design patterns to create objects in JavaScript. By using these patterns, we can create objects in a flexible and reusable way, which can make our code more maintainable and easier to extend in the future.
