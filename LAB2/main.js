const ProductFactory = require("./src/creational/factory");
const OrderBuilder = require("./src/creational/builder");
const customerSingleton = require("./src/creational/singleton");
const {
  getProductClone,
  getOrderClone,
  getCustomerClone,
} = require("./src/creational/prototype");
const Product = require("./src/models/product");
const Order = require("./src/models/order");
const Customer = require("./src/models/customer");

// Factory pattern
const productFactory = new ProductFactory();
const product1 = productFactory.createProduct("Product 1", 10);
console.log(product1);

// Builder pattern
const orderBuilder = new OrderBuilder("John");
const product2 = new Product("Product 2", 20);
orderBuilder.addItem(product1).addItem(product2);
const order = orderBuilder.build();
console.log(order);

// Singleton pattern
const customer1 = customerSingleton.getInstance("Jane", "jane@example.com");
const customer2 = customerSingleton.getInstance("John", "john@example.com");
console.log(customer1 === customer2); // true

// Prototype pattern
const productClone = getProductClone("Product Clone", 30);
console.log(productClone);
const orderClone = getOrderClone("Jane");
orderClone.addItem(productClone);
console.log(orderClone);
const customerClone = getCustomerClone("Jack", "jack@example.com");
console.log(customerClone);
