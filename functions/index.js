const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
const YOUR_DOMAIN = 'https://hardcore-leavitt-5b1886.netlify.app/'

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'ivory-company-456',
        quantity: 1,
      },
    ],
    payment_method_types: ['card', 'bacs_debit'],
    mode: 'subscription',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  })
  context.redirect(303, session.url)
}
