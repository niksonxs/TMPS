class Order {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
    this.total = 0;
  }

  addItem(item) {
    this.items.push(item);
    this.total += item.price;
  }

  clone() {
    const order = new Order(this.customerName);
    order.items = this.items;
    order.total = this.total;
    return order;
  }
}

module.exports = Order;
