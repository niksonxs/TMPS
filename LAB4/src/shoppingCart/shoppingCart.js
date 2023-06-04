import { ShoppingCartIterator } from "../behavioral/iterator/shoppingCartIterator.js";
export class ShoppingCart {
  constructor() {
    this.items = [];
    this.observers = [];
    this.commands = [];
  }

  addItem(item) {
    this.items.push(item);
    this.notifyObservers();
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.notifyObservers();
    }
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.items));
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  executeCommand(command) {
    command.execute();
    this.commands.push(command);
  }

  undoLastCommand() {
    const lastCommand = this.commands.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
  getIterator() {
    return new ShoppingCartIterator(this.items);
  }
}
