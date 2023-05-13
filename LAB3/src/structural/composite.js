// Component
class OrderComponent {
  getPrice() {
    throw new Error("getPrice() method must be implemented");
  }
}

// Leaf
class OrderItem extends OrderComponent {
  constructor(product, quantity) {
    super();
    this.product = product;
    this.quantity = quantity;
  }

  getPrice() {
    return this.product.getPrice() * this.quantity;
  }
}

// Composite
class OrderGroup extends OrderComponent {
  constructor() {
    super();
    this.orderComponents = [];
  }

  add(orderComponent) {
    this.orderComponents.push(orderComponent);
  }

  remove(orderComponent) {
    const index = this.orderComponents.indexOf(orderComponent);
    if (index !== -1) {
      this.orderComponents.splice(index, 1);
    }
  }

  getPrice() {
    return this.orderComponents.reduce(
      (total, component) => total + component.getPrice(),
      0
    );
  }
}

module.exports = { OrderItem, OrderGroup, OrderComponent };
