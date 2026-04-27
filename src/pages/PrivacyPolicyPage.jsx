import React from 'react'
import PrivacyPolicy from '../Components/PrivacyPolicy/PrivacyPolicy'
import { Helmet } from 'react-helmet-async';
function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Better Business Capital Solutions</title>
        <meta name="description" content="Read our privacy policy to understand how we protect your data and information." />
      </Helmet>

      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage