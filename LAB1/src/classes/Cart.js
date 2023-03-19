class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  updateItemQuantity(item, quantity) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items[index].quantity = quantity;
    }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.quantity * item.book.price,
      0
    );
  }
}

module.exports = Cart;
