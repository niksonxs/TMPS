const Book = require("./src/classes/Book.js");
const Cart = require("./src/classes/Cart.js");
const CartService = require("./src/services/Cart.service.js");
const OrderService = require("./src/services/Order.service.js");

function main() {
  // create some books
  const book1 = new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "978-1541322330",
    10.99,
    "Fiction"
  );
  const book2 = new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    "978-0060935467",
    12.99,
    "Fiction"
  );
  const book3 = new Book(
    "1984",
    "George Orwell",
    "978-0451524935",
    8.99,
    "Science Fiction"
  );

  // create a cart
  const cart = new Cart();

  // create a cart service
  const cartService = new CartService(cart);

  // add some items to the cart
  cartService.addItemToCart(book1, 2);
  cartService.addItemToCart(book2, 1);
  cartService.addItemToCart(book3, 1);

  // update quantity of an item in the cart
  cartService.updateItemQuantityInCart(book1, 3);

  // remove an item from the cart
  cartService.removeItemFromCart(book2);

  // get cart items and total
  const cartItems = cartService.getCartItems();
  const cartTotal = cartService.getCartTotal();

  console.log("Cart Items:");
  console.log(cartItems);
  console.log("Cart Total:", cartTotal);

  // create an order service
  const orderService = new OrderService(cartService);

  // place an order
  orderService.placeOrder("John Doe", "123 Main St", "Credit Card");
}

main();
