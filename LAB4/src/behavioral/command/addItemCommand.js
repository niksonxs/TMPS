export class AddItemCommand {
  constructor(shoppingCart, item) {
    this.shoppingCart = shoppingCart;
    this.item = item;
  }

  execute() {
    this.shoppingCart.addItem(this.item);
  }

  undo() {
    this.shoppingCart.removeItem(this.item);
  }
}
