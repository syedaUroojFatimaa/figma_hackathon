import React from 'react'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Popular from './components/Popular'
import Join from "./components/Join"
import Banner from './components/Banner'
import Footer from './components/Footer'
export default function page() {
  return (
    <div>
      <Hero />
      <Brand />
      <Popular />
      <Join />
      <Banner />
      <Footer />
    </div>
  )
}
