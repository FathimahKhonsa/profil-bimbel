import React from 'react';
import HeroLayout from '../layouts/sempoa/HeroLayout';
import AboutLayout from '../layouts/sempoa/AboutLayout';
import PembelajaranLayout from '../layouts/PembelajaranLayout';
import ContactLayout from '../layouts/home/ContactLayout';
import ScrollToTop from '../variants/ScrollToTop';


const SempoaPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <HeroLayout/>
      <AboutLayout/>
      <PembelajaranLayout/>
      <ContactLayout/>
    </div>
  )
}

export default SempoaPage;
