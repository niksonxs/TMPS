# Structural Design Patterns Project

This project demonstrates the usage of Structural Design Patterns such as Adapter, Bridge, Composite, and Decorator in an online shop app. These patterns help in managing complex systems and providing flexibility, reusability, and modularity to the code.

    Adapter Pattern
    Bridge Pattern
    Composite Pattern

### Domain Area

The domain area for this sample project is an e-commerce website that allows customers to order products online.
Folder Structure

The project should have the following folder structure:

    ├── creational
    │   ├── builder.js
    │   ├── factory.js
    │   ├── prototype.js
    │   └── singleton.js
    ├── structural
    │   ├── adapter.js
    │   ├── bridge.js
    │   ├── composite.js
    │   └── decorator.js
    ├── models
    │   ├── customer.js
    │   ├── order.js
    │   └── product.js
    └── main.js

### Project Structure

    structural/adapter.js: This file contains the implementation of the Adapter pattern.

    structural/bridge.js: This file contains the implementation of the Bridge pattern.

    structural/composite.js: This file contains the implementation of the Composite pattern.

    structural/decorator.js: This file contains the implementation of the Decorator pattern.

    creational/factory.js: This file contains the implementation of the Factory pattern for creating products.

    creational/builder.js: This file contains the implementation of the Builder pattern for creating orders.

    creational/singleton.js: This file contains the implementation of the Singleton pattern for creating a customer object.

    creational/prototype.js: This file contains the implementation of the Prototype pattern for cloning product, order, and customer objects.

    models/product.js: This file defines the Product class.

    models/order.js: This file defines the Order class.

    models/customer.js: This file defines the Customer class.

    main.js: This file contains the main code that uses the creational design patterns and models.

### Patterns

#### Adapter Pattern

The `StripePaymentGateway` class provides a way to process payments using the Stripe payment gateway. The `PaymentGatewayAdapter` class adapts the `StripePaymentGateway` class to work with the processPayment method in the app. To use this pattern, create an instance of `StripePaymentGateway`, pass it to an instance of `PaymentGatewayAdapter`, and call the processPayment method on the `PaymentGatewayAdapter` instance.

#### Bridge Pattern

The `PaymentMethodBridge` and `PaymentProcessorBridge` classes act as abstractions for the payment method and payment processor respectively. The `StripePaymentGatewayBridge` class implements the `PaymentProcessorBridge` interface and adapts the `StripePaymentGateway` class to work with the `PaymentProcessorBridge` interface. To use this pattern, create an instance of `StripePaymentGatewayBridge`, pass it to an instance of `PaymentProcessorBridge`, and pass that to an instance of `PaymentMethodBridge`. Call the processPayment method on the `PaymentMethodBridge` instance to process the payment

#### Composite Pattern

The composite pattern is used to treat a group of objects in the same way as a single object. In this project, the `OrderGroup` class is a composite of `OrderItem` objects, allowing multiple items to be added to an order and treated as a single item for pricing purposes.

#### Decorator Pattern

The decorator pattern is used to add new functionality to an existing object without altering its structure. In this project, the `OrderDecorator` class is used to add shipping fees to an order, while the `ShippingFeeOrderItemDecorator` class is used to add shipping fees to individual items.

### Running the Project

To run the project, you can execute the main.js file using Node.js:

`node main.js`

This will output the objects created using each pattern to the console.
Conclusion

This project demonstrates how to use creational design patterns to create objects in JavaScript. By using these patterns, we can create objects in a flexible and reusable way, which can make our code more maintainable and easier to extend in the future.
