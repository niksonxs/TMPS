// Component
class Order {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}

// Concrete Component
class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getPrice() {
    return this.product.getPrice() * this.quantity;
  }
}

// Decorator
class OrderItemDecorator {
  constructor(orderItem) {
    this.orderItem = orderItem;
  }

  getPrice() {
    return this.orderItem.getPrice();
  }
}

// Concrete Decorator
class ShippingFeeOrderItemDecorator extends OrderItemDecorator {
  constructor(orderItem, shippingFee) {
    super(orderItem);
    this.shippingFee = shippingFee;
  }

  getPrice() {
    return super.getPrice() + this.shippingFee;
  }
}

module.exports = {
  Order,
  OrderItem,
  OrderItemDecorator,
  ShippingFeeOrderItemDecorator,
};
