class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  clone() {
    return new Customer(this.name, this.email);
  }
}

module.exports = Customer;
