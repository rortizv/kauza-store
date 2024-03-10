// This is your test publishable API key.
const stripe = Stripe("pk_test_51OsuNu05XFMImnpulzgZFRx5suH57BfwmhHOhFsSaVMJUhgeslqpn9RCYLiJH3Z3jxuxsZjx1G7Y6eZu0JPPVWbO00sp2tm8IW");

initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
  });

  const { clientSecret } = await response.json();

  const checkout = await stripe.initEmbeddedCheckout({
    clientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}