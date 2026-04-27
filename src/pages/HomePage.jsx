import React from 'react'
import Home from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import SherFunding from '../Components/Home/SherFunding'
import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home - Better Business Capital Solutions</title>
        <meta name="description" content="Get fast and flexible business loans in the USA. Apply online and get approved quickly with Better Business Capital Solutions." />
      </Helmet>

      <Home />
      <Services />
      <SherFunding />
    </>
  )
}

export default HomePage