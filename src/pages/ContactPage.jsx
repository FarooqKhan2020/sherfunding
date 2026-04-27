import React from 'react'
import Contact from '../Components/Contact/Contact'
import { Helmet } from 'react-helmet-async';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Better Business Capital Solutions</title>
        <meta name="description" content="Get in touch with our business loan experts in the USA. We are here to help your business grow." />
      </Helmet>

      <Contact />
    </>
  )
}

export default ContactPage