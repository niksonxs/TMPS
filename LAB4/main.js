import { ShoppingCart } from "./src/shoppingCart/shoppingCart.js";
import { Product } from "./src/products/product.js";
import { AddItemCommand } from "./src/behavioral/command/addItemCommand.js";
import { CartTotalDisplay } from "./src/behavioral/observer/cartTotalDisplay.js";

const shoppingCart = new ShoppingCart();
const cartIterator = shoppingCart.getIterator();

const totalDisplay = new CartTotalDisplay();
shoppingCart.addObserver(totalDisplay);

console.log(cartIterator.hasNext()); // false

const book = new Product("Book", 10.99);
const electronics = new Product("Electronics", 499.99);

const addItemCommand1 = new AddItemCommand(shoppingCart, book);
const addItemCommand2 = new AddItemCommand(shoppingCart, electronics);

shoppingCart.executeCommand(addItemCommand1);
shoppingCart.executeCommand(addItemCommand2);

console.log(shoppingCart.items);

shoppingCart.undoLastCommand();
console.log(shoppingCart.items);

const iterator = shoppingCart.getIterator();
while (iterator.hasNext()) {
  const item = iterator.next();
  console.log(item.name);
}
