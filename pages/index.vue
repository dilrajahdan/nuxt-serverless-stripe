<template>
  <section>
    <div class="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div class="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form action="/functions/index" method="POST">
      <button id="checkout-button" type="submit">Checkout</button>
    </form>
  </section>
</template>

<script>
// import { Card, createToken } from 'vue-stripe-elements-plus'
// import { stripeKey, stripeOptions } from './stripeConfig.json'

export default {
  // components: { Card },
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
    }
  },

  // methods: {
  //   pay() {
  //     // createToken returns a Promise which resolves in a result object with
  //     // either a token or an error key.
  //     // See https://stripe.com/docs/api#tokens for the token object.
  //     // See https://stripe.com/docs/api#errors for the error object.
  //     // More general https://stripe.com/docs/stripe.js#stripe-create-token.
  //     createToken().then((data) => console.log(data.token))
  //   },
  // },
}
</script>
