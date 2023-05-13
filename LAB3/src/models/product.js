class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  clone() {
    return new Product(this.name, this.price);
  }
}

module.exports = Product;
