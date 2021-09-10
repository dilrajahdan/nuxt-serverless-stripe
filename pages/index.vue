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
    <!-- <form action="/.netlify/functions/index" method="POST">
      need a credit card form!!!!

      <button id="checkout-button" type="submit">Checkout</button>
    </form> -->
    <div id="checkout"></div>
  </section>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

export default {
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
    }
  },
  async created() {
    const stripe = await loadStripe('pk_test_mWF4dQC0ElTGLo2j8wV4beS7')
    const elements = stripe.elements()

    // const style = {
    //   base: {
    //     color: '#32325d',
    //     fontFamily: 'Arial, sans-serif',
    //     fontSmoothing: 'antialiased',
    //     fontSize: '16px',
    //     '::placeholder': {
    //       color: '#32325d',
    //     },
    //   },
    //   invalid: {
    //     fontFamily: 'Arial, sans-serif',
    //     color: '#fa755a',
    //     iconColor: '#fa755a',
    //   },
    // }
    const card = elements.create(
      'card',
      {}
      // { style }
    )
    // Stripe injects an iframe into the DOM
    card.mount('#checkout')
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
