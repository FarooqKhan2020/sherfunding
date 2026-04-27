import React from 'react'
import ApplyNow from '../Components/ApplyNow/ApplyNow'
import { Helmet } from 'react-helmet-async';
function ApplyNowPage() {
  return (
    <>

      <Helmet>
        <title>Apply Now - Better Business Capital Solutions</title>
       <meta name="description" content="Apply online for a business loan in the USA. Fast approval process with flexible financing options." />
      </Helmet>

      <ApplyNow />
    </>
  )
}

export default ApplyNowPage