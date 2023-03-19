class Order {
  constructor(customerName, customerAddress, paymentMethod, cart) {
    this.customerName = customerName;
    this.customerAddress = customerAddress;
    this.paymentMethod = paymentMethod;
    this.cart = cart;
  }

  getDetails() {
    return `Customer Name: ${this.customerName}\nCustomer Address: ${
      this.customerAddress
    }\nPayment Method: ${
      this.paymentMethod
    }\nOrder Total: ${this.cart.getTotal()}`;
  }

  placeOrder() {
    console.log(`Placing order for ${this.customerName}`);
    console.log(this.getDetails());
  }
}

module.exports = Order;
