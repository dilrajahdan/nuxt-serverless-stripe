const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
const YOUR_DOMAIN = 'https://hardcore-leavitt-5b1886.netlify.app'

exports.handler = async (event, context) => {
  console.log('dil', event, context)

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1JXF30AppzNLPbzgvbQnZr9y',
        quantity: 1,
      },
    ],
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/sucess`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  })
  // console.log('event', event)
  console.log('event.body', event.body)
  // console.log('context', context)
  console.log('session', session)
  // debugger
  // event.redirect(303, session.url)
  // return { statusCode: 303 }
  return {
    statusCode: 303,
    headers: {
      Location: session.url,
    },
  }
}
