const Customer = require("../models/customer");

const customerSingleton = (() => {
  let instance;

  function createInstance(name, email) {
    return new Customer(name, email);
  }

  return {
    getInstance: (name, email) => {
      if (!instance) {
        instance = createInstance(name, email);
      }
      return instance;
    },
  };
})();

module.exports = customerSingleton;
