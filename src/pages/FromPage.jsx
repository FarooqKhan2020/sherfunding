import React from 'react'
import Form from '../Components/Form/Form'
import { Helmet } from 'react-helmet-async';
function FromPage() {
  return (
    <>
      <Helmet>
        <title>Form - Better Business Capital Solutions</title>
         <meta name="description" content="Fill out our simple business loan application form to get started with funding in the USA." />
      </Helmet>

      <Form />
    </>
  )
}

export default FromPage