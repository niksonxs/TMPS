class PaymentMethodBridge {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  processPayment(customer, order) {
    const paymentData = {
      customerName: customer.getName(),
      customerEmail: customer.getEmail(),
      orderId: order.getId(),
      amount: order.getTotalPrice(),
    };
    this.paymentProcessor.processPayment(paymentData);
  }
}

// Implementor
class PaymentProcessorBridge {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment(paymentData) {
    this.paymentGateway.submitPayment(paymentData);
  }
}

// Concrete Implementor
class StripePaymentGatewayBridge {
  submitPayment(paymentData) {
    // Submit payment using the Stripe API
  }
}

module.exports = {
  PaymentMethodBridge,
  PaymentProcessorBridge,
  StripePaymentGatewayBridge,
};
