import React from 'react';
import HeroLayout from '../layouts/ahe/HeroLayout';
import AboutLayout from '../layouts/ahe/AboutLayout';
import PembelajaranLayout from '../layouts/PembelajaranLayout';
import ContactLayout from '../layouts/home/ContactLayout';

const AhePage = () => {
  return (
    <div>
      <HeroLayout/>
      <AboutLayout/>
      <PembelajaranLayout/>
      <ContactLayout/>
    </div>
  )
}

export default AhePage;
