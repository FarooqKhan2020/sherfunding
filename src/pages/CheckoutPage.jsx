import React from 'react'
import Checkout from '../Components/Checkout/Checkout'
import { Helmet } from 'react-helmet-async';

function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout - Better Business Capital Solutions</title>
         <meta name="description" content="Complete your business loan application securely. Fast and encrypted checkout process." />
      </Helmet>

      <Checkout />
    </>
  )
}

export default CheckoutPage