class PaymentGatewayAdapter {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment(customer, order) {
    const paymentData = {
      customerName: customer.getName(),
      customerEmail: customer.getEmail(),
      orderId: order.getId(),
      amount: order.getTotalPrice(),
    };
    this.paymentGateway.submitPayment(paymentData);
  }
}

class StripePaymentGateway {
  submitPayment(paymentData) {
    // Submit payment using the Stripe API
  }
}

module.exports = {
  PaymentGatewayAdapter,
  StripePaymentGateway,
};
