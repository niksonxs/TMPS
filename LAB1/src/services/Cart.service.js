const CartItem = require("../classes/CartItem");

class CartService {
  constructor(cart) {
    this.cart = cart;
  }

  addItemToCart(book, quantity) {
    const item = new CartItem(book, quantity);
    this.cart.addItem(item);
  }

  removeItemFromCart(book) {
    const item = this.cart.getItems().find((item) => item.book === book);
    this.cart.removeItem(item);
  }

  updateItemQuantityInCart(book, quantity) {
    const item = this.cart.getItems().find((item) => item.book === book);
    this.cart.updateItemQuantity(item, quantity);
  }

  getCartItems() {
    return this.cart.getItems();
  }

  getCartTotal() {
    return this.cart.getTotal();
  }
}

module.exports = CartService;
