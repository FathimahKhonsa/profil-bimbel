import React from 'react';
import HeroLayout from '../layouts/english/HeroLayout';
import AboutLayout from '../layouts/english/AboutLayout';
import PembelajaranLayout from '../layouts/PembelajaranLayout';
import ContactLayout from '../layouts/home/ContactLayout';
import ScrollToTop from '../variants/ScrollToTop';

const EnglishPage = () => {
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

export default EnglishPage;
