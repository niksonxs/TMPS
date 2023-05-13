const Product = require("../models/product");
const Order = require("../models/order");
const Customer = require("../models/customer");

const productPrototype = new Product("Prototype", 0);
const orderPrototype = new Order("Prototype");
const customerPrototype = new Customer("Prototype", "Prototype@example.com");

module.exports = {
  getProductClone: (name, price) => {
    const productClone = productPrototype.clone();
    productClone.name = name;
    productClone.price = price;
    return productClone;
  },
  getOrderClone: (customerName) => {
    const orderClone = orderPrototype.clone();
    orderClone.customerName = customerName;
    return orderClone;
  },
  getCustomerClone: (name, email) => {
    const customerClone = customerPrototype.clone();
    customerClone.name = name;
    customerClone.email = email;
    return customerClone;
  },
};
``;
