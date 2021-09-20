<template>
  <section>
    <h1>Custom Checkout Flow</h1>

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
    <form action="/.netlify/functions/index" method="POST">
      <button
        id="checkout-button"
        class="green darken-4 pa-2 mt-3 white--text"
        type="submit"
      >
        Checkout
      </button>
      <!-- need a credit card form!!!! -->

      <!-- <div id="card" class="grey pa-2 lighten-3"></div> -->
    </form>
  </section>
</template>

<script>
// import { loadStripe } from '@stripe/stripe-js'

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
    // const stripe = await loadStripe('pk_test_mWF4dQC0ElTGLo2j8wV4beS7')
    // const elements = stripe.elements()
    // const card = elements.create('card', {})
    // card.mount('#card')
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
