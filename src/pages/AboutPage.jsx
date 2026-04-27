import React from 'react'
import About from '../Components/About/About'
import { Helmet } from 'react-helmet-async';
function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Better Business Capital Solutions</title>
         <meta name="description" content="Learn about Better Business Capital Solutions, a trusted US-based business loan provider helping small and medium businesses grow." />
      </Helmet>

      <About />
    </>
  )
}

export default AboutPage