class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  clone() {
    return new Customer(this.name, this.email);
  }
}

module.exports = Customer;
