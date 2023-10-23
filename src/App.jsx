import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Guides from './components/Guides';
import Careers from './components/Careers';
import PhotoShoot from './components/PhotoShoot';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Guides />
      <Careers />
      <PhotoShoot />
      <Reviews />
      <Footer />

    </>
  )
}

export default App
