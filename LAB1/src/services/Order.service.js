const Order = require("../classes/Order");

class OrderService {
  constructor(cartService) {
    this.cartService = cartService;
  }

  placeOrder(customerName, customerAddress, paymentMethod) {
    const cart = this.cartService.cart;
    const order = new Order(customerName, customerAddress, paymentMethod, cart);
    order.placeOrder();
  }
}

module.exports = OrderService;
