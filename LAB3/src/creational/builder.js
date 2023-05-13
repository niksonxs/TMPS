const Order = require("../models/order");

class OrderBuilder {
  constructor(customerName) {
    this.order = new Order(customerName);
  }

  addItem(item) {
    this.order.addItem(item);
    return this;
  }

  getTotal() {
    return this.order.total;
  }

  build() {
    return this.order;
  }
}

module.exports = OrderBuilder;
