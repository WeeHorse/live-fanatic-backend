const Stripe = require("stripe");
const stripe = new Stripe("sk_test_NzHkwYglPCxxPr9NXGgBrhTy"); // stripe.com api secret key

module.exports = function (server) {
  // route for checkout
  server.post("/data/checkout", async (request, res) => {
    console.log(request.body, "REQUEST");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: request.body["line_items"],
      mode: "payment",
      success_url: request.body.successUrl,
      cancel_url: request.body.cancelUrl,
    });

    // save current checkout session to user session, so we can check result after
    request.session.checkoutSession = session;

    res.json({ url: session.url });
  });

  // route to retrieve checkout session to check result
  server.get("/data/checkout", async (request, res) => {
    try {
      const checkoutSession = await stripe.checkout.sessions.retrieve(
        request.session.checkoutSession.id
      );
      res.json({ checkoutSession });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
};
