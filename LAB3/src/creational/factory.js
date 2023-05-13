const Product = require("../models/product");

class ProductFactory {
  createProduct(name, price) {
    return new Product(name, price);
  }
}

module.exports = ProductFactory;
