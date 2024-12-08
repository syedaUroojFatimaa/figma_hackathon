import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Hero2 from './components/Hero2'
import Hmecards from './components/Hmecards'
import Join from './components/Join'
import Footer from './components/Footer'
import Banner from './components/Banner'
export default function page() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Hero2 />
      <Hmecards />
      <Join />
      <Banner />
      <Footer />
    </div>
  )
}
