const ProductFactory = require("./src/creational/factory");
const OrderBuilder = require("./src/creational/builder");
const customerSingleton = require("./src/creational/singleton");
const {
  getProductClone,
  getOrderClone,
  getCustomerClone,
} = require("./src/creational/prototype");
const Product = require("./src/models/product");

const StripePaymentGateway =
  require("./src/structural/adapter").StripePaymentGateway;
const PaymentGatewayAdapter =
  require("./src/structural/adapter").PaymentGatewayAdapter;

const PaymentMethodBridge =
  require("./src/structural/bridge").PaymentMethodBridge;
const PaymentProcessorBridge =
  require("./src/structural/bridge").PaymentProcessorBridge;
const StripePaymentGatewayBridge =
  require("./src/structural/bridge").StripePaymentGatewayBridge;
const OrderGroup = require("./src/structural/composite").OrderGroup;
const OrderItem = require("./src/structural/composite").OrderItem;

const OrderDecorator = require("./src/structural/decorator").Order;
const OrderItemDecorator = require("./src/structural/decorator").OrderItem;
const ShippingFeeOrderItemDecorator =
  require("./src/structural/decorator").ShippingFeeOrderItemDecorator;

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

// Usage adapter
const stripePaymentGateway = new StripePaymentGateway();
const paymentGatewayAdapter = new PaymentGatewayAdapter(stripePaymentGateway);

paymentGatewayAdapter.processPayment(customer1, order);

// Usage bridge

const stripePaymentGatewayBridge = new StripePaymentGatewayBridge();
const paymentProcessorBridge = new PaymentProcessorBridge(
  stripePaymentGatewayBridge
);
const paymentMethodBridge = new PaymentMethodBridge(paymentProcessorBridge);

paymentMethodBridge.processPayment(customer1, order);

// Usage composite
const orderComposite = new OrderGroup();
const orderItem1 = new OrderItem(new Product("Shirt", 50), 2);
const orderItem2 = new OrderItem(new Product("Pants", 75), 1);
const orderGroup = new OrderGroup();
const orderItem3 = new OrderItem(new Product("Socks", 10), 5);

orderComposite.add(orderItem1);
orderComposite.add(orderItem2);

orderGroup.add(orderItem3);
orderGroup.add(new OrderItem(new Product("Shoes", 100), 1));

orderComposite.add(orderGroup);

console.log(`Total price: ${orderComposite.getPrice()}`);

// Usage decorator
const orderDecorator = new OrderDecorator(customer1);

const orderItemDecorator1 = new OrderItemDecorator(new Product("Shirt", 50), 2);
const orderItemDecorator2 = new OrderItemDecorator(new Product("Pants", 75), 1);

const shippingFeeOrderItem1 = new ShippingFeeOrderItemDecorator(
  orderItemDecorator1,
  5
);
const shippingFeeOrderItem2 = new ShippingFeeOrderItemDecorator(
  orderItemDecorator2,
  5
);

orderDecorator.addItem(shippingFeeOrderItem1);
orderDecorator.addItem(shippingFeeOrderItem2);

console.log(`Total price: ${orderDecorator.getPrice()}`);
