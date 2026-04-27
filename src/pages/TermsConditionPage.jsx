import React from 'react'
import TermsCondition from '../Components/TermsCondition/TermsCondition'
import { Helmet } from 'react-helmet-async';

function TermsConditionPage() {
  return (
    <>

      <Helmet>
        <title>Terms & Conditions - Better Business Capital Solutions</title>
          <meta name="description" content="Read our terms and conditions for using our business loan services." />
      </Helmet>

      <TermsCondition />
    </>
  )
}

export default TermsConditionPage