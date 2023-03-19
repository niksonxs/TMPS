class Book {
  constructor(title, author, ISBN, price, category) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.price = price;
    this.category = category;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }

  getDetails() {
    return `Title: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}\nPrice: ${this.price}\nCategory: ${this.category}`;
  }

  calculateDiscount(discount) {
    return this.price - this.price * discount;
  }
}

module.exports = Book;
