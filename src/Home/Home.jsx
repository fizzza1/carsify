import React from 'react'
import Header from '../Components/Header';
import HeroSection from '../Pages/Components/HeroSection';
import CarCatalogue from '../Pages/Components/CarsCatalogue';
import HotCollections from '../Pages/Components/HotCollections';
import Footer from '../Components/Footer';
function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CarCatalogue />
      <HotCollections />
      <Footer />
    </div>
  )
}

export default Home;