import React from 'react'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'
// import Header from './Components/Home/Header'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet /> 
    <Footer />

    </>
  )
}

export default App